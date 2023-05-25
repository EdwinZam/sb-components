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
   color?: 'primary' | 'secondary' | 'tertiary' ; 
   /**
     * Color de la fuente?
    */
   fontcolor?: string;
   /**
     * Color de fondo
    */
   backgroundColor?: string;
}

export const MyLabel = ({
    label = 'No String',
    size = 'normal',
    allCaps= false,
    color='primary',
    fontcolor,
    backgroundColor ='transparent'
}: MyLabelProps) => {
  return (
    <span 
    className={ `label ${size} text-${color}`}
    style={{color: fontcolor, backgroundColor}}
    >
       { allCaps? label.toUpperCase() : label}
    </span>
  )
}
