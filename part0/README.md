```mermaid
sequenceDiagram
    participant browser
    participant server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
        server->>browser: Notes
        browser->>server: [test message in text field and submit]
```

#Single Page Diagram

```mermaid
sequenceDiagram
    participant browser
    participant server
        browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
        server->>browser: Notes -- single page app
        browser->>server: [test message in text field and submit]
```        

