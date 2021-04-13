import { Project } from 'ts-morph';

const project = new Project();

project.createSourceFile('generated/hello/hello.ts', 'console.log("Hello!")')

project.saveSync()
console.log("Done.")
