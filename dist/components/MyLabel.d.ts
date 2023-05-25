import './mylabel.css';
export interface MyLabelProps {
    /**
     * Este es label, debe ser un string?
     */
    label: string;
    /**
     * El tamaño debe ser normal, h1, h2, h3?
    */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Se busca hacer todo capitalizado?
    */
    allCaps: boolean;
    /**
      * Colores del Label?
     */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
      * Color de la fuente?
     */
    fontcolor?: string;
    /**
      * Color de fondo
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontcolor, backgroundColor }: MyLabelProps) => import("react/jsx-runtime").JSX.Element;
