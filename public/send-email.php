<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    
    $name = isset($data['name']) ? $data['name'] : 'Unknown';
    $email = isset($data['email']) ? $data['email'] : '';
    $phone = isset($data['phone']) ? $data['phone'] : '';
    $dates = isset($data['dates']) ? $data['dates'] : '';
    $guests = isset($data['guests']) ? $data['guests'] : '';
    $primary_villa = isset($data['primary_villa']) ? $data['primary_villa'] : '';
    $alternative_villa = isset($data['alternative_villa']) ? $data['alternative_villa'] : '';
    $meal_plan = isset($data['meal_plan']) ? $data['meal_plan'] : '';
    $nationality = isset($data['nationality']) ? $data['nationality'] : '';
    $special_requests = isset($data['special_requests']) ? $data['special_requests'] : 'None';

    // Target email to receive the notification
    $to = "sales@maldivesagents.com"; 
    $subject = "New Booking Inquiry - " . $name;
    
    // HTML email content for the Agent
    $htmlContent = "
    <!DOCTYPE html>
    <html>
    <body style=\"margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f1f5f9; color: #333333;\">
      <div style=\"max-width: 600px; margin: 30px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e2e8f0;\">
        <div style=\"background-color: #0f172a; padding: 25px; text-align: center;\">
          <h1 style=\"color: #ffffff; margin: 0; font-size: 20px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase;\">New Booking Inquiry</h1>
        </div>
        
        <div style=\"padding: 30px;\">
          <h2 style=\"margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;\">Guest Details</h2>
          <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin-bottom: 30px; font-size: 15px;\">
            <tr><td style=\"padding: 10px 0; color: #64748b; width: 35%; border-bottom: 1px solid #f8fafc;\">Name:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">$name</td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;\">Email:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\"><a href=\"mailto:$email\" style=\"color: #2563eb; text-decoration: none;\">$email</a></td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;\">Phone:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">$phone</td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;\">Nationality:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">$nationality</td></tr>
          </table>
          <h2 style=\"margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;\">Trip Details</h2>
          <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"margin-bottom: 30px; font-size: 15px;\">
            <tr><td style=\"padding: 10px 0; color: #64748b; width: 35%; border-bottom: 1px solid #f8fafc;\">Resort:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">One&Only Reethi Rah</td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;\">Dates:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">$dates</td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;\">Guests:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">$guests</td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;\">Primary Villa:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">$primary_villa</td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b; border-bottom: 1px solid #f8fafc;\">Alternative Villa:</td><td style=\"padding: 10px 0; color: #0f172a; font-weight: 500; border-bottom: 1px solid #f8fafc;\">$alternative_villa</td></tr>
            <tr><td style=\"padding: 10px 0; color: #64748b;\">Meal Plan:</td><td style=\"padding: 10px 0; color: #0f172a;\">$meal_plan</td></tr>
          </table>
          <h2 style=\"margin-top: 0; color: #0f172a; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #f1f5f9; padding-bottom: 10px;\">Special Requests</h2>
          <div style=\"background-color: #f8fafc; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;\">$special_requests</div>
          
          <div style=\"margin-top: 30px; text-align: center;\">
            <a href=\"mailto:$email\" style=\"display: inline-block; background-color: #0f172a; color: #ffffff; padding: 14px 28px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 15px;\">Reply to Client</a>
          </div>
        </div>
      </div>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    // Using a generic sender from the server to avoid DMARC failures
    $headers .= 'From: Maldives Agents <reservations@maldivesagents.com>' . "\r\n";
    $headers .= 'Reply-To: ' . $email . "\r\n";

    // Send email to Agent
    if(mail($to, $subject, $htmlContent, $headers)) {
        
        // Auto-reply to Guest
        if(!empty($email)) {
            $guestSubject = "We have received your booking inquiry - Maldives Agents";
            $guestHtml = "
            <!DOCTYPE html>
            <html>
            <body style=\"margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f5; color: #333333;\">
              <div style=\"max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);\">
                
                <!-- Header -->
                <div style=\"background-color: #0f172a; padding: 40px 30px; text-align: center;\">
                  <h1 style=\"color: #ffffff; margin: 0; font-size: 22px; font-weight: 300; letter-spacing: 3px; text-transform: uppercase;\">Maldives Agents</h1>
                </div>
                
                <!-- Content -->
                <div style=\"padding: 40px 30px;\">
                  <h2 style=\"margin-top: 0; color: #0f172a; font-size: 20px; font-weight: 600;\">Thank you for your inquiry, $name!</h2>
                  <p style=\"font-size: 16px; line-height: 1.6; color: #475569;\">We have safely received your booking request for <strong>One&Only Reethi Rah Maldives</strong>. Our dedicated luxury travel agents are currently reviewing your details and will contact you shortly with personalized offers and availability.</p>
                  
                  <!-- Summary Box -->
                  <div style=\"background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 25px; margin: 35px 0;\">
                    <h3 style=\"margin-top: 0; margin-bottom: 20px; color: #0f172a; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #e2e8f0; padding-bottom: 12px;\">Inquiry Summary</h3>
                    <table width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" style=\"font-size: 15px;\">
                      <tr>
                        <td style=\"padding: 8px 0; color: #64748b; width: 40%;\">Travel Dates:</td>
                        <td style=\"padding: 8px 0; color: #0f172a; font-weight: 500;\">$dates</td>
                      </tr>
                      <tr>
                        <td style=\"padding: 8px 0; color: #64748b;\">Guests:</td>
                        <td style=\"padding: 8px 0; color: #0f172a; font-weight: 500;\">$guests</td>
                      </tr>
                      <tr>
                        <td style=\"padding: 8px 0; color: #64748b;\">Villa Preference:</td>
                        <td style=\"padding: 8px 0; color: #0f172a; font-weight: 500;\">$primary_villa</td>
                      </tr>
                    </table>
                  </div>
                  
                  <p style=\"font-size: 16px; line-height: 1.6; color: #475569;\">If you require immediate assistance or wish to modify your request, please feel free to reply directly to this email.</p>
                  
                  <div style=\"margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 25px;\">
                    <p style=\"margin: 0; font-size: 14px; color: #0f172a; font-weight: 600;\">Warm Regards,</p>
                    <p style=\"margin: 5px 0 0 0; font-size: 14px; color: #64748b;\">The Maldives Agents Team</p>
                    <p style=\"margin: 15px 0 0 0; font-size: 13px; color: #475569;\">
                      <strong>WhatsApp:</strong> <a href=\"https://wa.me/9609149541\" style=\"color: #2563eb; text-decoration: none;\">+960 9149541</a><br/>
                      <strong>Email:</strong> <a href=\"mailto:reservations@maldivesagents.com\" style=\"color: #2563eb; text-decoration: none;\">reservations@maldivesagents.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </body>
            </html>
            ";
            
            $guestHeaders = "MIME-Version: 1.0" . "\r\n";
            $guestHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
            $guestHeaders .= 'From: Maldives Agents <reservations@maldivesagents.com>' . "\r\n";
            
            mail($email, $guestSubject, $guestHtml, $guestHeaders);
        }
        
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to send email. Check PHP mail() configuration on Hostinger."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
}
?>
