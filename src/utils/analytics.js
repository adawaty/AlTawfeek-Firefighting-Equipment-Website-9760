// Google Analytics and tracking utilities
export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (pagePath) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('form_submit', {
    form_name: formName,
    page_location: window.location.href
  });
};

// Track phone calls
export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    event_category: 'engagement',
    event_label: 'header_phone'
  });
};

// Track quote requests
export const trackQuoteRequest = (productType = 'general') => {
  trackEvent('quote_request', {
    product_type: productType,
    event_category: 'conversion'
  });
};

// Track external link clicks
export const trackExternalLink = (linkUrl, linkText) => {
  trackEvent('external_link_click', {
    link_url: linkUrl,
    link_text: linkText,
    event_category: 'outbound'
  });
};