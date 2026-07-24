import { FileText, X } from "lucide-react";

type UploadedFileProps = {
    name:string;
    size:number;
    onDelete:()=>void;
};


export default function UploadedFile({ name, size, onDelete, }:Readonly<UploadedFileProps>){

    return (
        <div className=" flex items-center justify-between rounded-2xl border border-border bg-white p-4">
            <div className="flex items-center gap-3">
                <div className=" flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                    <FileText size={18} className="text-accent"/>
                </div>


                <div>
                    <p className="text-sm font-medium">
                        {name}
                    </p>

                    <p className="text-xs text-muted-foreground">
                        {(size / 1024).toFixed(1)} KB
                    </p>
                </div>

            </div>


            <button type="button"  onClick={onDelete} className=" rounded-xl p-2 text-red-500 transition hover:bg-red-50">
                <X size={16}/>
            </button>


        </div>
    );
}