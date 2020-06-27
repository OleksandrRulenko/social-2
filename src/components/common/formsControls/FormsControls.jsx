import React from "react";
import s from "./FormsControls.module.css"



export const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}> 
            <div>
                {props.children}
            </div>
            <div>
                { hasError && <span>{meta.error}</span> }
            </div>
        </div>
    )
}

// Textarea for posts and messages.
export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

// Input for logins page.
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl> 
}




//*******************************************
// Textarea for posts and messages.
// export const Textarea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}> 
//             <div>
//                 <textarea {...input} {...props}/>
//             </div>
//             <div>
//                 { hasError && <span>{meta.error}</span> }
//             </div>

//         </div>
//     )
// }

// // Input for logins page.
// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;

//     return (
//         <div className={s.formControl + " " + (hasError ? s.error : "")}> 
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             <div>
//                 { hasError && <span>{meta.error}</span> }
//             </div>

//         </div>
//     )
// }