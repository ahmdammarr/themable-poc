import { CSSProperties } from "react";

type ButtonVariants = 'Primary' | 'Secondary'
export const ButtonStyle:{[key in ButtonVariants]:CSSProperties} = {
    'Primary':{
     fontSize:14,
     padding:10,
     backgroundColor:'#1A3F45',
     color:"#FFFFFF"

    },
    'Secondary':{
        fontSize:10,
        padding:8,
        backgroundColor:'#99AAAC',
        color:"#FFFFFF"
    }
}