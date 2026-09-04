import { course2026 } from "../data/course2026";

export function getWaitlistMailto() {
  const { email, mailtoSubject, mailtoBody } = course2026.waitlist;
  return `mailto:${email}?subject=${encodeURIComponent(mailtoSubject)}&body=${encodeURIComponent(mailtoBody)}`;
}
