import { useState } from "react";
import FileUpload from "./FileUpload";
import UploadedFile from "./UploadedFile";
import { BusinessDocument } from "../../../model/BusinessDocument";


type Props = {
    files: BusinessDocument[];
    onChange:(files:BusinessDocument[])=>void;
    maxFiles:number;
};


export default function DocumentUpload({ files, onChange, maxFiles=1 }:Readonly<Props>){

    const [pendingFile,setPendingFile] = useState<File | null>(null);
    const [title,setTitle] = useState("");
    const handleSelect=(selected:File[])=>{
        const file = selected[0];
        if(!file) return;
        setPendingFile(file);
    };


    const addDocument=()=>{
        if(!pendingFile || !title) return;
        const document:BusinessDocument = {
            id:crypto.randomUUID(),
            file:pendingFile,
            title,
        };

        onChange([ ...files, document].slice(0,maxFiles));

        setPendingFile(null);
        setTitle("");
    };


    const removeFile=(id:string)=>{
        onChange( files.filter(file=>file.id !== id));
    };


    return (
        <div className="space-y-6">
            <FileUpload
                label="Add document"
                accept="application/pdf,image/png,image/jpeg,image/webp"
                multiple={false}
                onSelect={handleSelect}
            />


            {pendingFile && (
                <div className=" rounded-2xl border border-border bg-white p-4 space-y-3">

                    <input
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        placeholder="Document title"
                        className=" w-full rounded-xl border border-border px-3 py-2 outline-none focus:border-accent"/>

                    <button type="button" onClick={addDocument}  className=" rounded-xl bg-accent px-4 py-2 text-white">
                        Add document
                    </button>
                </div>
            )}


            <div className="space-y-3">
                {files.map(file=>(
                    <UploadedFile
                        key={file.id}
                        name={file.title || file.file.name}
                        size={file.file.size}
                        onDelete={()=>removeFile(file.id)}
                    />
                ))}
            </div>
        </div>
    );
}