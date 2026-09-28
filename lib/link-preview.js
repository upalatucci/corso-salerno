const LINK_PREVIEW_BOT_PATTERN =
  /bot|crawler|spider|facebookexternalhit|facebot|twitterbot|whatsapp|linkedinbot|telegrambot|slackbot|discordbot|embedly|pinterest|skypeuripreview|applebot|preview/i;

export function isLinkPreviewBot(userAgent) {
  if (!userAgent) return false;
  return LINK_PREVIEW_BOT_PATTERN.test(userAgent);
}
