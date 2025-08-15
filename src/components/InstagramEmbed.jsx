import React, { useEffect } from "react";

export default function InstagramEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const embedCode = `
    <blockquote class="instagram-media"
            data-instgrm-permalink="https://www.instagram.com/rishu.blend/"
            data-instgrm-version="14">
  <div>Placeholder</div>
</blockquote>
  `;

  return (
    <div
      className="flex justify-center items-center my-8"
      dangerouslySetInnerHTML={{ __html: embedCode }}
    />
  );
}
