from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

df = None

@app.post("/upload")
async def upload_file(
    dataset: UploadFile = File(...)
):
    global df

    df = pd.read_csv(dataset.file)

    return {
        "message": "File Uploaded Successfully",
        "rows": len(df),
        "columns": len(df.columns)
    }