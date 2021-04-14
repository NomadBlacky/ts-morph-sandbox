import { Project } from 'ts-morph';

const project = new Project();
const sourceFile = project.createSourceFile('generated/cf-datadog-monitor.ts', '', {
    overwrite: true,
});

const schema = require('../DatadogMonitor.schema.json');
console.log(schema);

sourceFile.saveSync();
console.log('Done.');
