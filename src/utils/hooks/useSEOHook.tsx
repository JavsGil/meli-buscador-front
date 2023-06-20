import { useEffect, useRef } from 'react';

interface Props {
    title?: string,
    description?: string,
    ogTitle?: string,
    ogDescription?: string,
    ogImage?: string,
}

export default function useSEOHook ({
    title,
    description,
    ogTitle,
    ogDescription,
    ogImage,
}: Props) {
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]')?.getAttribute('content'));
    const prevOgTitle = useRef(document.querySelector('meta[name="og:title"]')?.getAttribute('content'));
    const prevOgDescription = useRef(document.querySelector('meta[name="og:description"]')?.getAttribute('content'));
    const prevOgImage = useRef(document.querySelector('meta[name="og:image"]')?.getAttribute('content'));

    useEffect(() => {
        const previousTitle = prevTitle.current;

        if (title) {
            document.title = title;
        }

        return () => {
            document.title = previousTitle 
        }
    },[title])

    useEffect(()=> {
        const metaDescription = document.querySelector('meta[name="description"]')
        const previousDescription = prevDescription.current;

        if (description) {
            metaDescription?.setAttribute("content", description)
        }
       
        return () => {
            if (previousDescription) {
                metaDescription?.setAttribute("content", previousDescription)
            }
        }
    },[description])

    useEffect(() => {
        const metaOgTitle = document.querySelector('meta[property="og:title"]')
        const previousOgTitle = prevOgTitle.current
        
        if (ogTitle) {
            metaOgTitle?.setAttribute('content', ogTitle)
        }

        return () => {
            if (previousOgTitle) {
                metaOgTitle?.setAttribute('content', previousOgTitle)
            }
        }
    }, [ogTitle])

    useEffect(() => {
        const metaOgDescription = document.querySelector('meta[property="og:description"]')
        const previousOgDescription = prevOgDescription.current
        
        if (ogDescription) {
            metaOgDescription?.setAttribute('content', ogDescription)
        }

        return () => {
            if (previousOgDescription) {
                metaOgDescription?.setAttribute('content', previousOgDescription)
            }
        }
    }, [ogDescription])
    
    useEffect(() => {
        const metaOgImage = document.querySelector('meta[property="og:image"]')
        const previousOgImage = prevOgImage.current
       
        if (ogImage) {
            metaOgImage?.setAttribute('content', ogImage)
        }

        return () => {
            if (previousOgImage) {
                metaOgImage?.setAttribute('content', previousOgImage)
            }
        }
    }, [ogImage])
}
