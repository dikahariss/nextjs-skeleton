import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "@/app/api/health/route";

describe("/api/health", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return healthy status", async () => {
    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.status).toBe("healthy");
    expect(data.version).toBe("0.1.0");
    expect(data.services.auth).toBe("operational");
    expect(data.services.api).toBe("operational");
    expect(data.timestamp).toBeDefined();
  });

  it("should return timestamp in ISO format", async () => {
    const response = await GET();
    const data = await response.json();

    expect(data.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/);
  });
});
