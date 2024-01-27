export default {
  rootDir: "./../",
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        diagnostics: { ignoreCodes: [1343] },
        astTransformers: {
          before: [
            {
              path: "node_modules/ts-jest-mock-import-meta",
              options: {
                metaObjectReplacement: {
                  env: {
                    VITE_BACKEND_API: "",
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/jest/fileMock.ts",
    "^.+\\.(css|less|scss|sass)$": "<rootDir>/jest/styleMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/jest/setupTests.ts"],
  moduleFileExtensions: [
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  modulePaths: ["<rootDir>/src"],
};
