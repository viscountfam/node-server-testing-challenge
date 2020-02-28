const request = require("supertest");
const server = require("../api/server.js");

describe("teams router", function() {
    ir("should run the tests", function() {
        expect(true).toBe(true);
    });
});


describe("GET /", function() {
    it("should return 200 ok", function() {
        return request(server)
        .get("/api/teams")
        .then(res => {
            expect(res.status).toBe(200)
        });
    });
})

describe("GET/", function() {
    it("should return an array", function() {
        return request(server)
        .get("/api/teams")
        .then(res => {
            expect(res.type).toMatch(/json/);
        })
    })

    it("should return an array of teams", function() {
        return request(server)
        .get("/api/teams")
        .then(res => {
            expect(Array.isArray(res.body)).toBe(true)
        });
    });

    
})