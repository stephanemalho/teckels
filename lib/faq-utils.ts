// Utilitaires pour extraire le contenu texte des FAQ
import type { ReactElement, ReactNode } from "react";
import { isValidElement } from "react";
import type { FAQItem } from "@/components/faq";

/**
 * Extrait le texte brut d'un élément React FAQ answer
 * Utile pour générer les schémas JSON-LD sans duplication de code
 */
export function extractTextFromFAQ(faqItem: FAQItem): {
    question: string;
    answer: string;
} {
    const question = faqItem.question;
    const answer = extractText(faqItem.answer)
        .replace(/\s+/g, " ")
        .trim();

    return { question, answer };
}

/**
 * Convertit un tableau de FAQItem en format pour JSON-LD
 */
export function convertFAQsToSchema(
    faqs: FAQItem[]
): Array<{ question: string; answer: string }> {
    return faqs.map((faq) => extractTextFromFAQ(faq));
}

function extractText(node: ReactNode): string {
    if (node == null || typeof node === "boolean") return "";
    if (typeof node === "string" || typeof node === "number") return String(node);
    if (Array.isArray(node)) {
        return node.map((child) => extractText(child)).filter(Boolean).join(" ");
    }
    if (isValidElement(node)) {
        const element = node as ReactElement<any>;
        return extractText(element.props?.children);
    }
    return "";
}
