import type { CSSProperties, ImgHTMLAttributes } from "react";

import type { PuppyImage } from "@/app/nos-chiots/puppies";
import {
    getPuppyJpegImageSrc,
    getPuppySourceImageSrc,
    getPuppyThumbImageSrc,
} from "@/app/nos-chiots/puppy-seo";

type PuppyPictureProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "loading"> & {
    image: PuppyImage;
    fill?: boolean;
    priority?: boolean;
    loading?: "eager" | "lazy";
    fetchPriority?: "high" | "low" | "auto";
};

const fillStyle: CSSProperties = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: 0,
    color: "transparent",
};

export function PuppyPicture({
    image,
    fill = false,
    priority = false,
    loading,
    fetchPriority,
    decoding = "async",
    sizes,
    style,
    ...props
}: PuppyPictureProps) {
    const webpSrcSet = `${getPuppyThumbImageSrc(image)} 400w, ${getPuppySourceImageSrc(image)} 800w`;
    const resolvedStyle = fill ? { ...fillStyle, ...style } : style;
    const resolvedLoading = loading ?? (priority ? "eager" : "lazy");
    const resolvedFetchPriority = fetchPriority ?? (priority ? "high" : "auto");

    return (
        <picture>
            <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
            <img
                src={getPuppyJpegImageSrc(image)}
                sizes={sizes}
                alt={image.alt}
                loading={resolvedLoading}
                fetchPriority={resolvedFetchPriority}
                decoding={decoding}
                style={resolvedStyle}
                {...props}
            />
        </picture>
    );
}
