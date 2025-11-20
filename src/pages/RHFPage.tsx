import { useForm } from "react-hook-form";
import { custom, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const RegisterFormSchema = z.object ({
    UserName : z
    .string()
    .min(3, {message: "dikit pisan nama teh"})
    .max(10, {message: "kepanjangan namanya"}),

    Email : z
    .string()
    .min (5, {message : "Email terlalu pendek"})
    .email ({message : "Email tidak valid"}),

    Password : z
    .string()
    .min(8,  {message: "Minimal 8 karakter"})
    .regex(/[A-Z]/, {message: "Minimal harus ada 1 huruf kapital"})
    .regex(/[0-9]/, {message: "Minimal harus ada 1 angka"}),

    RepeatPassword : z 
    .string(),

    Age : z.coerce
    .number()
    .min(18, {message: "Kamu belum cukup umur"})
    .max(60, {message: "Kamu terlalu tua untuk isi"}),

})

.superRefine((arg,ctx)=>{
    if (arg.Password !== arg.RepeatPassword) {
        ctx.addIssue({
            code : "custom",
            path : ["RepeatPassword"],
            message : "Password tidak sama"
        })
    }
})

type registerSkema = z.infer<typeof RegisterFormSchema>;

const RHFPage =() => {
    const [submittedData, setSubmittedData] = useState <registerSkema [] >([]);
    const [show,setShow] = useState (false)
  
    const form = useForm <registerSkema> ({
        resolver : zodResolver(RegisterFormSchema) as any
        
    }) 


    const handleRegister = (values : registerSkema ) => {
        setSubmittedData (prev=> [...prev,values]);
        form.reset ();
    }

    return (

        <div>
            <h1>React Hook Form Page</h1>
            <form 
            action=""
            style={{display: "flex", flexDirection: "column", gap :"20px"}}
            onSubmit={form.handleSubmit(handleRegister)}
            >
                <div style={{display:"flex"}}>
                <label> User Name :</label>
                <input type="text" {...form.register('UserName')} autoComplete="Off"/>
                <span style={{color:"red"}}> {form.formState.errors.UserName?.message} </span>
                </div>

                <div style={{display:"flex"}}>
                <label> Email :</label>
                <input type="Email" {...form.register('Email')}/>
                <span style={{color:"red"}}> {form.formState.errors.Email?.message} </span>
                </div>

                <div style={{display:"flex"}}>
                <label> Password :</label>
                <input type={show? "Text" : "password"} {...form.register('Password')} />
                <input type= "checkbox" onChange={()=> setShow(!show)}/>
                <span style={{color:"red"}}> {form.formState.errors.Password?.message} </span>
                </div>

                <div style={{display:"flex"}}>
                <label> Repeat Password :</label>
                <input type={show? "Text" : "password"} {...form.register('RepeatPassword')} />
                <input type= "checkbox" onChange={()=> setShow(!show)}/>
                <span style={{color:"red"}}> {form.formState.errors.RepeatPassword?.message} </span>
                </div>

                <div style={{display:"flex"}}>
                <label> Umur :</label>
                <input type="number" {...form.register('Age',{valueAsNumber:true})}
                        onKeyDown={(e) => {
                        if (e.key === 'e' || e.key === 'E' || e.key === '+' || e.key === '-') {
                        e.preventDefault();
                    }
                    }} 
                        onPaste={(e) => {
                        const text = e.clipboardData.getData("text");
                        if (!/^\d+$/.test(text)) {
                            e.preventDefault();
                    }
                    }}
                />
                <span style={{color:"red"}}> {form.formState.errors.Age?.message} </span>
                </div>

                <button> Submit</button>
                <button type="reset"> reset</button>
            </form>
            <div>

                
            <h4 style={{display:"flex", gap : "10px", textAlign:"left"}}>
                {submittedData.map((item,index) => (
                    <div key={index} >
                        UserName: {item.UserName} <br />
                        Email: {item.Email} <br />
                        Password: {item.Password} <br />
                        Umur: {item.Age} <br />
                        <br />

                    </div>
                )
            )
                }

                   </h4>
       
            </div>

        </div>
    )
}

export default RHFPage