export const getAssetPath = (path: string): string => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path;
  }

  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const basePath = "/VR-Dental-Care-Dental-Implant-Centre";

  if (cleanPath.startsWith(basePath)) {
    return cleanPath;
  }

  if (typeof window !== "undefined") {
    if (window.location.pathname.startsWith(basePath) || window.location.hostname.endsWith("github.io")) {
      return `${basePath}${cleanPath}`;
    }
  }

  if (process.env.NODE_ENV === "production") {
    return `${basePath}${cleanPath}`;
  }

  return cleanPath;
};
