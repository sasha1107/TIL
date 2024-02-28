---
to: src/<%= directory %>/index.ts
---
<% for (var i = 0; i < files.length; i++) { %>
export { ReactComponent as <%= h.changeCase.pascal(files[i]) %> } from '<%= files[i] %>';<% } %>
