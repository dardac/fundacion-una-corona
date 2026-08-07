/**
 * Image helpers — decode before swap to avoid blank flashes / scroll jank.
 */

const preloaded = new Set<string>();

export function preloadImage(src: string): Promise<HTMLImageElement> {
  const img = new Image();
  img.decoding = 'async';
  img.src = src;

  const done = img.decode
    ? img.decode().then(() => img)
    : new Promise<HTMLImageElement>((resolve, reject) => {
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`Failed to load ${src}`));
      });

  return done.finally(() => {
    preloaded.add(src);
  });
}

export function prefetchImages(urls: string[]) {
  const unique = [...new Set(urls.filter(Boolean))];
  const run = () => {
    for (const url of unique) {
      if (preloaded.has(url)) continue;
      preloadImage(url).catch(() => {
        /* ignore */
      });
    }
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(run, { timeout: 2500 });
  } else {
    window.setTimeout(run, 400);
  }
}

/**
 * Swap img src only after the next frame is decoded — no opacity flash to empty.
 */
export async function swapImageSrc(
  img: HTMLImageElement,
  src: string,
  alt?: string,
): Promise<void> {
  if (!src || img.getAttribute('src') === src) {
    if (alt !== undefined) img.alt = alt;
    return;
  }

  try {
    await preloadImage(src);
  } catch {
    /* still attempt swap */
  }

  img.src = src;
  if (alt !== undefined) img.alt = alt;

  if (img.decode) {
    try {
      await img.decode();
    } catch {
      /* ignore */
    }
  }
}
