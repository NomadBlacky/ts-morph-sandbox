declare module '*/DatadogMonitor.schema.json' {
    interface Foo {
        typeName: string,
        description: string,
        definitions: { [key: string]: object }
        properties: { [key: string]: object }
        required: string[]
        writeOnlyProperties: string[]
        primaryIdentifier: string[]
        readOnlyProperties: string[]
        additionalProperties: boolean
        handlers: { [key: string]: object }
    }

    const value: Foo;
    export = value
}