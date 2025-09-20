export const canonicalFor = (path = "/") => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.wiserbond.com";
  const u = new URL(path, baseUrl);
  u.search = "";
  u.hash = "";
  return u.toString();
};
