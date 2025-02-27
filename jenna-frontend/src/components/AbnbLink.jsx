import { useEffect } from "react";

const AbnbLink = () => {
  useEffect(() => {
    // Load Airbnb script dynamically
    const script = document.createElement("script");
    script.src = "https://www.airbnb.com/embeddable/airbnb_jssdk";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Clean up script on unmount
    };
  }, []);

  return (
    <div
      className="airbnb-embed-frame"
      data-id="1252944713686371251"
      data-view="home"
      data-hide-price="true"
      style={{ width: "450px", height: "300px", margin: "auto" }}
      dangerouslySetInnerHTML={{
        __html: `<a href="https://www.airbnb.com/rooms/1252944713686371251?guests=1&adults=1&s=66&source=embed_widget">View On Airbnb</a>
        <a href="https://www.airbnb.com/rooms/1252944713686371251?guests=1&adults=1&s=66&source=embed_widget" rel="nofollow">
        Home in Maple Shade · ★4.78 · 1 bedroom · 1 bed · 1 private bath</a>`,
      }}
    />
  );
};

export default AbnbLink;