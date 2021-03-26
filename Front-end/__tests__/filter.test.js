import { users } from "../src/lib/hardCode";
import "core-js";

const filter = require("../src/lib/filter").filter;
const getUsers = require("../src/lib/filter").getUsers;

describe("Test filter", () => {
  it("Positive flow", () => {
    expect(filter(users, "Mark", "name")).toEqual([
      {
        id: 2,
        name: "Mark",
        email: "mark@gmail.com",
      },
    ]);
    expect(filter(users, "denny@gm", "email")).toEqual([
      {
        id: 7,
        name: "Denny",
        email: "denny@gmail.com",
      },
    ]);
  });
  it("Negative flow", () => {
    expect(filter(users, "srt", "name")).toEqual([]);
    expect(filter(users, "asss@gmail.com", "email")).toEqual([]);
  });
});

describe("Test getUsers", () => {
  it("Positive flow", () => {
    expect(getUsers(users)).toEqual([
      {
        id: 1,
        name: "Maks",
        email: "maks@gmail.com",
      },
      {
        id: 2,
        name: "Mark",
        email: "mark@gmail.com",
      },
      {
        id: 5,
        name: "Ivan",
        email: "ivan@gmail.com",
      },
      {
        id: 6,
        name: "Alex",
        email: "alex@gmail.com",
      },
      {
        id: 8,
        name: "Alek",
        email: "alek@gmail.com",
      },
      {
        id: 7,
        name: "Denny",
        email: "denny@gmail.com",
      },
      {
        id: 3,
        name: "Mario",
        email: "mario@gmail.com",
      },
      {
        id: 4,
        name: "Patrick",
        email: "patrick@gmail.com",
      },
    ]);
  });
});
