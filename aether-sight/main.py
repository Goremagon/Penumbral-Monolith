from fastapi import FastAPI

app = FastAPI(title="Aether-Sight API", version="0.1.0")


@app.get("/")
def read_root() -> dict[str, str]:
    return {
        "service": "aether-sight",
        "status": "online",
        "philosophy": "Silent Systems. Unseen Power."
    }


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}
