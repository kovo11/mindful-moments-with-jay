
import emailjs from 'emailjs-com';

// EmailJS credentials
const SERVICE_ID = "service_lx7m2wb";
const CONFIRMATION_TEMPLATE_ID = "template_zs9kpwf";
const SUPPORT_TEMPLATE_ID = "template_knkhvfb";
const PUBLIC_KEY = "_BtyukWyct1h9S7Hc";

/**
 * Initialize EmailJS with the provided public key
 */
export const initEmailJS = (): void => {
  try {
    emailjs.init(PUBLIC_KEY);
    console.log("EmailJS initialized successfully");
  } catch (error) {
    console.error("EmailJS initialization failed:", error);
  }
};

/**
 * Format event type for display (e.g., "meetgreet" → "Meet & Greet")
 */
const formatEventType = (eventType: string): string => {
  if (!eventType) return "Meet & Greet";
  
  // Convert camelCase or snake_case to readable format
  return eventType
    .replace(/([A-Z])/g, ' $1') // Add space before capital letters
    .replace(/_/g, ' ') // Replace underscores with spaces
    .replace(/^\w/, c => c.toUpperCase()) // Capitalize first letter
    .trim();
};

/**
 * Generate a unique booking reference number
 */
const generateBookingReference = (): string => {
  const timestamp = new Date().getTime().toString().slice(-6);
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `JS-${timestamp}-${random}`;
};

/**
 * Generate HTML email template
 */
export const generateEmailTemplate = (
  name: string, 
  location: string, 
  eventType: string,
  formattedDate?: string
): string => {
  const bookingReference = generateBookingReference();
  const date = formattedDate || new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="background: linear-gradient(to right, #8a2be2, #4169e1); padding: 2px; border-radius: 8px;">
        <div style="background-color: #fff; padding: 20px; border-radius: 6px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8a2be2; margin-bottom: 10px;">Your Booking Confirmation</h1>
            <p style="font-size: 18px; color: #666;">Thank you for booking your spot!</p>
          </div>

          <div style="margin-bottom: 30px;">
            <p>Hello ${name},</p>
            <p>Thank you for booking your spot at the upcoming Jay Shetty ${formatEventType(eventType)} event. We're excited to see you there!</p>
          </div>

          <div style="background-color: #f7f7f7; border-left: 4px solid #8a2be2; padding: 15px; margin-bottom: 30px;">
            <h3 style="margin-top: 0; color: #333;">Event Details</h3>
            <p><strong>Type:</strong> ${formatEventType(eventType)}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Booking Reference:</strong> ${bookingReference}</p>
          </div>

          <div style="margin-bottom: 30px;">
            <p>Please keep this booking reference for your records. You'll need to present this at the event registration desk.</p>
            <p>If you have any questions or need to make changes to your booking, please contact our support team by replying to this email.</p>
          </div>

          <div style="text-align: center; margin-top: 40px;">
            <a href="https://jayshetty.me" style="background: linear-gradient(to right, #8a2be2, #4169e1); color: white; text-decoration: none; padding: 12px 30px; border-radius: 30px; font-weight: bold;">Visit Our Website</a>
          </div>

          <div style="margin-top: 40px; text-align: center; color: #666; font-size: 14px;">
            <p>Follow Jay Shetty</p>
            <div>
              <a href="https://instagram.com/jayshetty" style="color: #8a2be2; margin: 0 10px; text-decoration: none;">Instagram</a>
              <a href="https://twitter.com/jayshetty" style="color: #8a2be2; margin: 0 10px; text-decoration: none;">Twitter</a>
              <a href="https://facebook.com/JayShettyIW" style="color: #8a2be2; margin: 0 10px; text-decoration: none;">Facebook</a>
            </div>
            <p style="margin-top: 20px;">© ${new Date().getFullYear()} Jay Shetty Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  `;
};

/**
 * Send confirmation email to the client
 */
export const sendConfirmationEmail = async (
  email: string,
  name: string,
  location: string,
  eventType: string,
  formattedDate?: string
): Promise<emailjs.EmailJSResponseStatus> => {
  try {
    const emailContent = generateEmailTemplate(name, location, eventType, formattedDate);
    
    const templateParams = {
      to_email: email,
      to_name: name,
      subject: `Jay Shetty ${formatEventType(eventType)} Booking Confirmation`,
      message_html: emailContent,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      CONFIRMATION_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Confirmation email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw error;
  }
};

/**
 * Send notification email to the admin support team
 */
export const sendSupportEmail = async (
  name: string,
  clientEmail: string,
  bookingDetails: string,
  eventType: string,
  location: string
): Promise<emailjs.EmailJSResponseStatus> => {
  try {
    const formattedType = formatEventType(eventType);
    
    const templateParams = {
      from_name: name,
      client_email: clientEmail,
      event_type: formattedType,
      event_location: location,
      booking_details: bookingDetails,
      subject: `New Booking: ${formattedType} - ${location}`,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      SUPPORT_TEMPLATE_ID,
      templateParams
    );
    
    console.log('Support notification email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending support notification email:', error);
    throw error;
  }
};

/**
 * Send both confirmation and support notification emails
 */
export const sendBookingEmails = async (
  email: string,
  name: string,
  location: string,
  eventType: string,
  bookingDetails: string,
  formattedDate?: string
): Promise<[emailjs.EmailJSResponseStatus, emailjs.EmailJSResponseStatus]> => {
  try {
    const confirmationPromise = sendConfirmationEmail(email, name, location, eventType, formattedDate);
    const supportPromise = sendSupportEmail(name, email, bookingDetails, eventType, location);
    
    const results = await Promise.all([confirmationPromise, supportPromise]);
    console.log('All booking emails sent successfully');
    return results;
  } catch (error) {
    console.error('Error sending booking emails:', error);
    throw error;
  }
};
