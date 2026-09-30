import express from "express";
import path from "path";
import fs from "fs";
// Initialize local JSON database for offline storage
const dbDir = path.join(process.cwd(), 'data');
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}
const dbPath = path.join(dbDir, 'inquiries.json');
if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify([]), 'utf8');
}

import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import "dotenv/config";
import { resortData } from "./src/data/resort";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Subdomain redirect middleware
  app.use((req, res, next) => {
    if (req.hostname === "oneandonlyreethirah.maldivesagents.com") {
      const path = req.originalUrl === "/" ? "" : req.originalUrl;
      return res.redirect(301, `https://maldivesagents.com/oneandonlyreethirah${path}`);
    }
    next();
  });

  app.use(express.json());

  // API Routes
  app.post(["/api/send-email", "/oneandonlyreethirah/api/send-email", "/send-email.php"], async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        dates,
        guests,
        primary_villa,
        alternative_villa,
        meal_plan,
        nationality,
        special_requests
      } = req.body;

      if (!process.env.HOSTINGER_SMTP_USER || !process.env.HOSTINGER_SMTP_PASS) {
        console.error("Missing SMTP credentials");
        return res.status(500).json({ error: "Email configuration missing" });
      }

      const transporter = nodemailer.createTransport({
        host: process.env.HOSTINGER_SMTP_HOST || "smtp.hostinger.com",
        port: parseInt(process.env.HOSTINGER_SMTP_PORT || "465"),
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.HOSTINGER_SMTP_USER,
          pass: process.env.HOSTINGER_SMTP_PASS,
        },
      });

      const targetEmail = process.env.NOTIFICATION_EMAIL || process.env.HOSTINGER_SMTP_USER;

      const htmlContent = `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #333333;">
          <div style="max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;">
            <div style="background-color: #0f172a; padding: 25px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;">New Booking Inquiry</h1>
            </div>
            
            <div style="padding: 30px;">
              <h2 style="margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Client Details</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px; margin-bottom: 30px;">
                <tr><td style="padding: 10px 0; color: #64748b; width: 35%; border-bottom: 1px solid #f8fafc;">Name:</td><td style="padding: 10px 0; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f8fafc;">${name}</td></tr>
                <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;">Email:</td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f8fafc;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;">Phone:</td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f8fafc;">${phone || "Not provided"}</td></tr>
                <tr><td style="padding: 10px 0; color: #64748b;">Nationality:</td><td style="padding: 10px 0; color: #0f172a;">${nationality || "Not provided"}</td></tr>
              </table>

              <h2 style="margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Booking Request</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px; margin-bottom: 30px;">
                <tr><td style="padding: 10px 0; color: #64748b; width: 35%; border-bottom: 1px solid #f8fafc;">Dates:</td><td style="padding: 10px 0; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f8fafc;">${dates}</td></tr>
                <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;">Guests:</td><td style="padding: 10px 0; color: #0f172a; font-weight: 600; border-bottom: 1px solid #f8fafc;">${guests}</td></tr>
                <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;">Primary Villa:</td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f8fafc;">${primary_villa || "Not specified"}</td></tr>
                <tr><td style="padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;">Alternative Villa:</td><td style="padding: 10px 0; color: #0f172a; border-bottom: 1px solid #f8fafc;">${alternative_villa || "Not specified"}</td></tr>
                <tr><td style="padding: 10px 0; color: #64748b;">Meal Plan:</td><td style="padding: 10px 0; color: #0f172a;">${meal_plan || "Not specified"}</td></tr>
              </table>

              <h2 style="margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;">Special Requests</h2>
              <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${special_requests || "None"}</div>
              
              <div style="margin-top: 30px; text-align: center;">
                <a href="mailto:${email}" style="display: inline-block; background-color: #0f172a; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;">Reply to Client</a>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"Maldives Agents" <${process.env.HOSTINGER_SMTP_USER}>`,
        to: targetEmail,
        subject: `New Booking Inquiry - ${name}`,
        html: htmlContent,
      });

      // Find the image for the primary villa
      let villaImageHtml = "";
      if (primary_villa) {
        const room = resortData.rooms.find((r) => r.name === primary_villa);
        if (room && room.images && room.images.length > 0) {
          villaImageHtml = `
            <tr>
              <td colspan="2" style="padding: 15px 0 5px 0;">
                <img src="${room.images[0]}" alt="${primary_villa}" style="width: 100%; max-width: 100%; border-radius: 6px; height: auto; display: block; border: 1px solid #e2e8f0;" />
              </td>
            </tr>
          `;
        }
      }

      // Send auto-reply to the guest
      if (email) {
        const guestHtmlContent = `
          <!DOCTYPE html>
          <html>
          <body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #333333;">
            <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
              
              <!-- Header -->
              <div style="background-color: #0f172a; padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 300; letter-spacing: 3px; text-transform: uppercase;">Maldives Agents</h1>
              </div>
              
              <!-- Content -->
              <div style="padding: 40px 30px;">
                <h2 style="margin-top: 0; color: #0f172a; font-size: 20px; font-weight: 600;">Thank you for your inquiry, ${name}!</h2>
                <p style="font-size: 16px; line-height: 1.6; color: #475569;">We have safely received your booking request for <strong>One&Only Reethi Rah Maldives</strong>. Our dedicated luxury travel agents are currently reviewing your details and will contact you shortly with personalized offers and availability.</p>
                
                <!-- Summary Box -->
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 25px; margin: 35px 0;">
                  <h3 style="margin-top: 0; margin-bottom: 20px; color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;">Inquiry Summary</h3>
                  <table width="100%" cellpadding="0" cellspacing="0" style="font-size: 15px;">
                    <tr>
                      <td style="padding: 8px 0; color: #64748b; width: 40%;">Travel Dates:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${dates}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b;">Guests:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${guests}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0; color: #64748b;">Villa Preference:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 500;">${primary_villa || "Not specified"}</td>
                    </tr>
                    ${villaImageHtml}
                  </table>
                </div>
                
                <p style="font-size: 16px; line-height: 1.6; color: #475569;">If you require immediate assistance or wish to modify your request, please feel free to reply directly to this email.</p>
                
                <div style="margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 25px;">
                  <p style="margin: 0; font-size: 14px; color: #0f172a; font-weight: 600;">Warm Regards,</p>
                  <p style="margin: 5px 0 0 0; font-size: 14px; color: #64748b;">The Maldives Agents Team</p>
                  <p style="margin: 15px 0 0 0; font-size: 13px; color: #475569;">
                    <strong>WhatsApp:</strong> <a href="https://wa.me/9609149541" style="color: #2563eb; text-decoration: none;">+960 9149541</a><br/>
                    <strong>Email:</strong> <a href="mailto:reservations@maldivesagents.com" style="color: #2563eb; text-decoration: none;">reservations@maldivesagents.com</a>
                  </p>
                </div>
              </div>
            </div>
          </body>
          </html>
        `;

        await transporter.sendMail({
          from: `"Maldives Agents" <${process.env.HOSTINGER_SMTP_USER}>`,
          to: email,
          subject: `We have received your booking inquiry - Maldives Agents`,
          html: guestHtmlContent,
        });
      }

      // Send Telegram Notification
      const telegramToken = process.env.VITE_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.VITE_TELEGRAM_CHAT_ID;

      if (telegramToken && chatId) {
        try {
          const now = new Date();
          const maldivesTime = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Indian/Maldives',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true
          }).format(now).replace(',', ' at');

          const altRoom = alternative_villa && alternative_villa !== 'None' ? alternative_villa : (primary_villa || "Not specified");
          const roomStr = primary_villa ? `${primary_villa} (Alt: ${altRoom})` : "Not specified";

          const telegramMessage = `New Inquiry: Soneva Jani
Received: ${maldivesTime} (Maldives Time)

Name: ${name}
Email: ${email}
Phone: ${phone || "Not provided"}
Nationality: ${nationality || "Not provided"}

Room: ${roomStr}
Meal Plan: ${meal_plan || "Not specified"}
Dates: ${dates}
Guests: ${guests}

Notes: ${special_requests || "None"}`;

          await fetch(`https://api.telegram.org/bot${telegramToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: telegramMessage
            })
          });
        } catch (telegramError) {
          console.error("Failed to send Telegram notification:", telegramError);
        }
      }

      
      // Store offline locally in JSON file
      try {
        const inquiries = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        const newInquiry = {
          id: Date.now(),
          created_at: new Date().toISOString(),
          name, email, phone, nationality, dates, guests, primary_villa, alternative_villa, meal_plan, special_requests
        };
        inquiries.push(newInquiry);
        fs.writeFileSync(dbPath, JSON.stringify(inquiries, null, 2), 'utf8');
        console.log(`Successfully saved inquiry to local JSON DB`);
      } catch (err) {
        console.error("Failed to insert into local JSON DB:", err.message);
      }

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);

    app.get("*", async (req, res, next) => {
      try {
        const url = req.originalUrl;
        let template = fs.readFileSync(path.resolve(process.cwd(), "index.html"), "utf-8");
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ "Content-Type": "text/html" }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    // SPA fallback: redirect all unknown routes to index.html
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
