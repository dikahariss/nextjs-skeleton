import { describe, it, expect, vi, beforeEach } from "vitest";
import { GET } from "@/app/api/user/route";
import { auth } from "@clerk/nextjs/server";

// Mock Clerk auth
vi.mock("@clerk/nextjs/server", () => ({
  auth: vi.fn(),
}));

describe("/api/user", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return 401 when user is not authenticated", async () => {
    // Mock unauthenticated user
    vi.mocked(auth).mockResolvedValue({ userId: null });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(401);
    expect(data.error).toBe("Unauthorized");
  });

  it("should return user data when authenticated", async () => {
    // Mock authenticated user
    const mockUserId = "user_123";
    vi.mocked(auth).mockResolvedValue({ userId: mockUserId });

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.userId).toBe(mockUserId);
    expect(data.message).toBe("User API endpoint working");
    expect(data.timestamp).toBeDefined();
  });

  it("should handle server errors gracefully", async () => {
    // Mock auth throwing error
    vi.mocked(auth).mockRejectedValue(new Error("Server error"));

    const response = await GET();
    const data = await response.json();

    expect(response.status).toBe(500);
    expect(data.error).toBe("Internal server error");
    expect(data.message).toBe("Failed to fetch user data");
  });
});
