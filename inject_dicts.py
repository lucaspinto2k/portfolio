import json
import re

def update_file(filepath):
    with open("parsed_projects.json", "r", encoding="utf-8") as f:
        projects = json.load(f)
    
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    projects_json_str = json.dumps(projects, indent=6, ensure_ascii=False)
    # The string will have \n and quotes.
    # We want to replace the `projects: [ ... ]` array inside `caseStudies: { ... }`
    
    # Let's find `caseStudies: {`
    match = re.search(r'(caseStudies:\s*\{.*?projects:\s*)(\[.*?\])(\s*\})', content, re.DOTALL)
    if not match:
        print(f"Could not find caseStudies.projects in {filepath}")
        return
    
    new_content = content[:match.start(2)] + projects_json_str + content[match.end(2):]
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(new_content)

update_file("src/locales/en.ts")
update_file("src/locales/pt.ts")
