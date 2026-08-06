// ============================================
// QA Engineer GitHub Profile README Generator
// ============================================

// --- QA Expertise & Testing Types ---
const expertiseData = [
  { name: "Manual Testing", color: "#6C3FD1", icon: "🔍" },
  { name: "Automation Testing", color: "#00C853", icon: "🤖" },
  { name: "API Testing", color: "#FF6D00", icon: "🔗" },
  { name: "Performance Testing", color: "#D32F2F", icon: "⚡" },
  { name: "Security Testing", color: "#1565C0", icon: "🔐" },
  { name: "Mobile Testing", color: "#00897B", icon: "📱" },
  { name: "Database Testing", color: "#5D4037", icon: "🗄️" },
  { name: "Accessibility Testing", color: "#6A1B9A", icon: "♿" },
  { name: "Regression Testing", color: "#EF6C00", icon: "🔄" },
  { name: "Integration Testing", color: "#283593", icon: "🔀" },
  { name: "Smoke Testing", color: "#424242", icon: "💨" },
  { name: "UAT Testing", color: "#2E7D32", icon: "👥" },
  { name: "Cross-Browser Testing", color: "#0277BD", icon: "🌐" },
  { name: "E2E Testing", color: "#AD1457", icon: "🔚" },
  { name: "Load Testing", color: "#BF360C", icon: "📈" },
  { name: "Exploratory Testing", color: "#00695C", icon: "🧭" },
  { name: "Contract Testing", color: "#4527A0", icon: "📜" },
  { name: "Visual Testing", color: "#C2185B", icon: "👁️" },
];

// --- QA Certifications ---
const certificationsData = [
  { name: "ISTQB Foundation Level", color: "#1565C0", icon: "🎓" },
  { name: "ISTQB Advanced - Test Analyst", color: "#1565C0", icon: "🎓" },
  { name: "ISTQB Advanced - Test Manager", color: "#1565C0", icon: "🎓" },
  { name: "ISTQB Advanced - Tech Test Analyst", color: "#1565C0", icon: "🎓" },
  { name: "ISTQB Expert Level", color: "#0D47A1", icon: "🏅" },
  { name: "CSTE - Certified Software Tester", color: "#2E7D32", icon: "🎓" },
  { name: "CSQA", color: "#2E7D32", icon: "🎓" },
  { name: "Certified Scrum Master (CSM)", color: "#FF6D00", icon: "📋" },
  { name: "SAFe Agilist", color: "#00897B", icon: "📋" },
  { name: "AWS Certified", color: "#FF9900", icon: "☁️" },
  { name: "Azure Certified", color: "#0078D4", icon: "☁️" },
  { name: "Selenium Certification", color: "#43B02A", icon: "🤖" },
  { name: "Appium Certification", color: "#663399", icon: "📱" },
  { name: "Certified Agile Tester (CAT)", color: "#6C3FD1", icon: "📋" },
  { name: "TMMI Professional", color: "#D32F2F", icon: "📊" },
];

// --- QA Methodologies ---
const methodologiesData = [
  { name: "Agile Testing", color: "#00C853", icon: "🔄" },
  { name: "Scrum", color: "#FF6D00", icon: "📋" },
  { name: "Kanban", color: "#0277BD", icon: "📌" },
  { name: "TDD", color: "#D32F2F", icon: "🔴" },
  { name: "BDD", color: "#2E7D32", icon: "🟢" },
  { name: "ATDD", color: "#6A1B9A", icon: "🟣" },
  { name: "Shift-Left Testing", color: "#1565C0", icon: "⬅️" },
  { name: "Continuous Testing", color: "#00897B", icon: "♾️" },
  { name: "Risk-Based Testing", color: "#BF360C", icon: "⚠️" },
  { name: "Waterfall", color: "#455A64", icon: "🌊" },
  { name: "V-Model", color: "#4527A0", icon: "✌️" },
  { name: "DevOps/DevTestOps", color: "#0277BD", icon: "🛠️" },
];

// --- Skills & Tools Data ---
const skillsData = {
  "Programming Languages": [
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", badge: "Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", badge: "Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", badge: "JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", badge: "TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", badge: "C%23-239120?style=for-the-badge&logo=csharp&logoColor=white" },
    { name: "Ruby", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg", badge: "Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg", badge: "Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" },
    { name: "Go", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg", badge: "Go-00ADD8?style=for-the-badge&logo=go&logoColor=white" },
    { name: "Groovy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/groovy/groovy-original.svg", badge: "Groovy-4298B8?style=for-the-badge&logo=apachegroovy&logoColor=white" },
    { name: "Scala", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg", badge: "Scala-DC322F?style=for-the-badge&logo=scala&logoColor=white" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", badge: "PHP-777BB4?style=for-the-badge&logo=php&logoColor=white" },
    { name: "Shell/Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", badge: "Shell-121011?style=for-the-badge&logo=gnu-bash&logoColor=white" },
    { name: "SQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", badge: "SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
  ],

  "Test Automation Frameworks": [
    { name: "Selenium", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", badge: "Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white" },
    { name: "Playwright", icon: "https://playwright.dev/img/playwright-logo.svg", badge: "Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" },
    { name: "Cypress", icon: "https://cdn.simpleicons.org/cypress/17202C", badge: "Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white" },
    { name: "WebdriverIO", icon: "https://cdn.simpleicons.org/webdriverio/EA5906", badge: "WebdriverIO-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white" },
    { name: "TestCafe", icon: "https://cdn.simpleicons.org/testcafe/36B6E5", badge: "TestCafe-36B6E5?style=for-the-badge&logo=testcafe&logoColor=white" },
    { name: "Puppeteer", icon: "https://cdn.simpleicons.org/puppeteer/40B5A4", badge: "Puppeteer-40B5A4?style=for-the-badge&logo=puppeteer&logoColor=white" },
    { name: "Appium", icon: "https://cdn.simpleicons.org/appium/663399", badge: "Appium-663399?style=for-the-badge&logo=appium&logoColor=white" },
    { name: "Robot Framework", icon: "https://cdn.simpleicons.org/robotframework/000000", badge: "Robot_Framework-000000?style=for-the-badge&logo=robotframework&logoColor=white" },
    { name: "Katalon Studio", icon: "https://cdn.simpleicons.org/katalon/18A558", badge: "Katalon-18A558?style=for-the-badge&logo=katalon&logoColor=white" },
    { name: "Tosca", fallbackColor: "#1E88E5", badge: "Tosca-1E88E5?style=for-the-badge&logoColor=white" },
    { name: "Ranorex", fallbackColor: "#00B0F0", badge: "Ranorex-00B0F0?style=for-the-badge&logoColor=white" },
    { name: "Detox", fallbackColor: "#0A0A0A", badge: "Detox-0A0A0A?style=for-the-badge&logoColor=white" },
    { name: "Nightwatch.js", fallbackColor: "#2B2E3B", badge: "Nightwatch.js-2B2E3B?style=for-the-badge&logoColor=white" },
    { name: "Protractor", fallbackColor: "#ED163A", badge: "Protractor-ED163A?style=for-the-badge&logoColor=white" },
  ],

  "API Testing Tools": [
    { name: "Postman", icon: "https://cdn.simpleicons.org/postman/FF6C37", badge: "Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    { name: "REST Assured", fallbackColor: "#4CAF50", badge: "REST_Assured-4CAF50?style=for-the-badge&logoColor=white" },
    { name: "SoapUI", fallbackColor: "#FCDC00", badge: "SoapUI-FCDC00?style=for-the-badge&logoColor=black" },
    { name: "Swagger", icon: "https://cdn.simpleicons.org/swagger/85EA2D", badge: "Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black" },
    { name: "Karate", fallbackColor: "#8BC34A", badge: "Karate-8BC34A?style=for-the-badge&logoColor=white" },
    { name: "Insomnia", icon: "https://cdn.simpleicons.org/insomnia/4000BF", badge: "Insomnia-4000BF?style=for-the-badge&logo=insomnia&logoColor=white" },
    { name: "Newman", fallbackColor: "#FF6C37", badge: "Newman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" },
    { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", badge: "GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white" },
    { name: "gRPC", fallbackColor: "#244C5A", badge: "gRPC-244C5A?style=for-the-badge&logoColor=white" },
    { name: "Pactum", fallbackColor: "#333333", badge: "Pactum-333333?style=for-the-badge&logoColor=white" },
    { name: "SuperTest", fallbackColor: "#CC0000", badge: "SuperTest-CC0000?style=for-the-badge&logoColor=white" },
    { name: "HTTPie", icon: "https://cdn.simpleicons.org/httpie/73DC8C", badge: "HTTPie-73DC8C?style=for-the-badge&logo=httpie&logoColor=white" },
  ],

  "Performance Testing": [
    { name: "JMeter", icon: "https://cdn.simpleicons.org/apachejmeter/D22128", badge: "JMeter-D22128?style=for-the-badge&logo=apachejmeter&logoColor=white" },
    { name: "Gatling", icon: "https://cdn.simpleicons.org/gatling/FF9E2A", badge: "Gatling-FF9E2A?style=for-the-badge&logo=gatling&logoColor=white" },
    { name: "k6", icon: "https://cdn.simpleicons.org/k6/7D64FF", badge: "k6-7D64FF?style=for-the-badge&logo=k6&logoColor=white" },
    { name: "Locust", fallbackColor: "#008000", badge: "Locust-008000?style=for-the-badge&logoColor=white" },
    { name: "Artillery", fallbackColor: "#000000", badge: "Artillery-000000?style=for-the-badge&logoColor=white" },
    { name: "LoadRunner", fallbackColor: "#0076CE", badge: "LoadRunner-0076CE?style=for-the-badge&logoColor=white" },
    { name: "BlazeMeter", fallbackColor: "#CA2133", badge: "BlazeMeter-CA2133?style=for-the-badge&logoColor=white" },
    { name: "Lighthouse", icon: "https://cdn.simpleicons.org/lighthouse/F44B21", badge: "Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white" },
    { name: "WebPageTest", fallbackColor: "#2B3990", badge: "WebPageTest-2B3990?style=for-the-badge&logoColor=white" },
  ],

  "Test Frameworks": [
    { name: "TestNG", fallbackColor: "#CD6532", badge: "TestNG-CD6532?style=for-the-badge&logoColor=white" },
    { name: "JUnit", icon: "https://cdn.simpleicons.org/junit5/25A162", badge: "JUnit5-25A162?style=for-the-badge&logo=junit5&logoColor=white" },
    { name: "pytest", icon: "https://cdn.simpleicons.org/pytest/0A9EDC", badge: "pytest-0A9EDC?style=for-the-badge&logo=pytest&logoColor=white" },
    { name: "Mocha", icon: "https://cdn.simpleicons.org/mocha/8D6748", badge: "Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white" },
    { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325", badge: "Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" },
    { name: "NUnit", fallbackColor: "#008000", badge: "NUnit-008000?style=for-the-badge&logoColor=white" },
    { name: "xUnit", fallbackColor: "#512BD4", badge: "xUnit-512BD4?style=for-the-badge&logoColor=white" },
    { name: "Jasmine", icon: "https://cdn.simpleicons.org/jasmine/8A4182", badge: "Jasmine-8A4182?style=for-the-badge&logo=jasmine&logoColor=white" },
    { name: "Chai", icon: "https://cdn.simpleicons.org/chai/A30701", badge: "Chai-A30701?style=for-the-badge&logo=chai&logoColor=white" },
    { name: "RSpec", fallbackColor: "#CC0000", badge: "RSpec-CC0000?style=for-the-badge&logoColor=white" },
    { name: "Cucumber", icon: "https://cdn.simpleicons.org/cucumber/23D96C", badge: "Cucumber-23D96C?style=for-the-badge&logo=cucumber&logoColor=white" },
    { name: "SpecFlow", fallbackColor: "#6C3FD1", badge: "SpecFlow-6C3FD1?style=for-the-badge&logoColor=white" },
    { name: "Behave", fallbackColor: "#4CAF50", badge: "Behave-4CAF50?style=for-the-badge&logoColor=white" },
    { name: "Vitest", icon: "https://cdn.simpleicons.org/vitest/6E9F18", badge: "Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white" },
  ],

  "CI/CD": [
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", badge: "Jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white" },
    { name: "GitHub Actions", icon: "https://cdn.simpleicons.org/githubactions/2088FF", badge: "GitHub_Actions-2088FF?style=for-the-badge&logo=githubactions&logoColor=white" },
    { name: "GitLab CI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", badge: "GitLab_CI-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" },
    { name: "CircleCI", icon: "https://cdn.simpleicons.org/circleci/343434", badge: "CircleCI-343434?style=for-the-badge&logo=circleci&logoColor=white" },
    { name: "Azure DevOps", icon: "https://cdn.simpleicons.org/azuredevops/0078D7", badge: "Azure_DevOps-0078D7?style=for-the-badge&logo=azuredevops&logoColor=white" },
    { name: "Travis CI", icon: "https://cdn.simpleicons.org/travisci/3EAAAF", badge: "Travis_CI-3EAAAF?style=for-the-badge&logo=travisci&logoColor=white" },
    { name: "Bamboo", fallbackColor: "#0052CC", badge: "Bamboo-0052CC?style=for-the-badge&logo=bamboo&logoColor=white" },
    { name: "TeamCity", icon: "https://cdn.simpleicons.org/teamcity/000000", badge: "TeamCity-000000?style=for-the-badge&logo=teamcity&logoColor=white" },
    { name: "ArgoCD", icon: "https://cdn.simpleicons.org/argo/EF7B4D", badge: "ArgoCD-EF7B4D?style=for-the-badge&logo=argo&logoColor=white" },
    { name: "Bitbucket Pipelines", icon: "https://cdn.simpleicons.org/bitbucket/0052CC", badge: "Bitbucket_Pipelines-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white" },
  ],

  "Bug Tracking & Project Management": [
    { name: "Jira", icon: "https://cdn.simpleicons.org/jira/0052CC", badge: "Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white" },
    { name: "Bugzilla", fallbackColor: "#CC0000", badge: "Bugzilla-CC0000?style=for-the-badge&logo=bugzilla&logoColor=white" },
    { name: "Azure Boards", icon: "https://cdn.simpleicons.org/azuredevops/0078D7", badge: "Azure_Boards-0078D7?style=for-the-badge&logo=azuredevops&logoColor=white" },
    { name: "Trello", icon: "https://cdn.simpleicons.org/trello/0052CC", badge: "Trello-0052CC?style=for-the-badge&logo=trello&logoColor=white" },
    { name: "Asana", icon: "https://cdn.simpleicons.org/asana/F06A6A", badge: "Asana-F06A6A?style=for-the-badge&logo=asana&logoColor=white" },
    { name: "Monday.com", fallbackColor: "#FF3D57", badge: "Monday.com-FF3D57?style=for-the-badge&logoColor=white" },
    { name: "Linear", icon: "https://cdn.simpleicons.org/linear/5E6AD2", badge: "Linear-5E6AD2?style=for-the-badge&logo=linear&logoColor=white" },
    { name: "YouTrack", fallbackColor: "#000000", badge: "YouTrack-000000?style=for-the-badge&logo=youtrack&logoColor=white" },
    { name: "Redmine", icon: "https://cdn.simpleicons.org/redmine/B32024", badge: "Redmine-B32024?style=for-the-badge&logo=redmine&logoColor=white" },
    { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/7B68EE", badge: "ClickUp-7B68EE?style=for-the-badge&logo=clickup&logoColor=white" },
  ],

  "Test Management": [
    { name: "TestRail", fallbackColor: "#65C179", badge: "TestRail-65C179?style=for-the-badge&logoColor=white" },
    { name: "Zephyr", fallbackColor: "#0052CC", badge: "Zephyr-0052CC?style=for-the-badge&logoColor=white" },
    { name: "qTest", fallbackColor: "#59C2E6", badge: "qTest-59C2E6?style=for-the-badge&logoColor=white" },
    { name: "TestLink", fallbackColor: "#607D8B", badge: "TestLink-607D8B?style=for-the-badge&logoColor=white" },
    { name: "Xray", fallbackColor: "#0052CC", badge: "Xray-0052CC?style=for-the-badge&logoColor=white" },
    { name: "PractiTest", fallbackColor: "#FF6D00", badge: "PractiTest-FF6D00?style=for-the-badge&logoColor=white" },
    { name: "Allure TestOps", fallbackColor: "#2BAD5E", badge: "Allure_TestOps-2BAD5E?style=for-the-badge&logoColor=white" },
    { name: "Azure Test Plans", fallbackColor: "#0078D7", badge: "Azure_Test_Plans-0078D7?style=for-the-badge&logoColor=white" },
  ],

  "Cloud Testing Platforms": [
    { name: "BrowserStack", icon: "https://cdn.simpleicons.org/browserstack/FF6D00", badge: "BrowserStack-FF6D00?style=for-the-badge&logo=browserstack&logoColor=white" },
    { name: "Sauce Labs", icon: "https://cdn.simpleicons.org/saucelabs/E2231A", badge: "Sauce_Labs-E2231A?style=for-the-badge&logo=saucelabs&logoColor=white" },
    { name: "LambdaTest", icon: "https://cdn.simpleicons.org/lambdatest/0089CF", badge: "LambdaTest-0089CF?style=for-the-badge&logo=lambdatest&logoColor=white" },
    { name: "Selenium Grid", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", badge: "Selenium_Grid-43B02A?style=for-the-badge&logo=selenium&logoColor=white" },
    { name: "AWS Device Farm", fallbackColor: "#FF9900", badge: "AWS_Device_Farm-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white" },
    { name: "Firebase Test Lab", icon: "https://cdn.simpleicons.org/firebase/FFCA28", badge: "Firebase_Test_Lab-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" },
  ],

  "Databases": [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", badge: "MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", badge: "PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", badge: "MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "SQL Server", icon: "https://cdn.simpleicons.org/microsoftsqlserver/CC2927", badge: "SQL_Server-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" },
    { name: "Oracle", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg", badge: "Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", badge: "Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" },
    { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", badge: "SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" },
    { name: "DynamoDB", icon: "https://cdn.simpleicons.org/amazondynamodb/4053D6", badge: "DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb&logoColor=white" },
  ],

  "DevOps & Infrastructure": [
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", badge: "Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", badge: "Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/232F3E", badge: "AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white" },
    { name: "Azure", icon: "https://cdn.simpleicons.org/microsoftazure/0078D4", badge: "Azure-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" },
    { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud/4285F4", badge: "GCP-4285F4?style=for-the-badge&logo=googlecloud&logoColor=white" },
    { name: "Terraform", icon: "https://cdn.simpleicons.org/terraform/7B42BC", badge: "Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white" },
    { name: "Ansible", icon: "https://cdn.simpleicons.org/ansible/EE0000", badge: "Ansible-EE0000?style=for-the-badge&logo=ansible&logoColor=white" },
    { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639", badge: "Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white" },
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", badge: "Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" },
  ],

  "Version Control": [
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", badge: "Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", badge: "GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
    { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg", badge: "GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white" },
    { name: "Bitbucket", icon: "https://cdn.simpleicons.org/bitbucket/0052CC", badge: "Bitbucket-0052CC?style=for-the-badge&logo=bitbucket&logoColor=white" },
    { name: "SVN", fallbackColor: "#809CC9", badge: "SVN-809CC9?style=for-the-badge&logo=subversion&logoColor=white" },
  ],

  "Reporting Tools": [
    { name: "Allure Reports", fallbackColor: "#2BAD5E", badge: "Allure_Reports-2BAD5E?style=for-the-badge&logoColor=white" },
    { name: "ExtentReports", fallbackColor: "#00897B", badge: "ExtentReports-00897B?style=for-the-badge&logoColor=white" },
    { name: "Mochawesome", fallbackColor: "#8D6748", badge: "Mochawesome-8D6748?style=for-the-badge&logoColor=white" },
    { name: "ReportPortal", fallbackColor: "#FF6D00", badge: "ReportPortal-FF6D00?style=for-the-badge&logoColor=white" },
    { name: "Playwright HTML Reporter", fallbackColor: "#2EAD33", badge: "Playwright_Reporter-2EAD33?style=for-the-badge&logoColor=white" },
    { name: "Serenity BDD", fallbackColor: "#1565C0", badge: "Serenity_BDD-1565C0?style=for-the-badge&logoColor=white" },
  ],

  "Security Testing Tools": [
    { name: "OWASP ZAP", fallbackColor: "#00549E", badge: "OWASP_ZAP-00549E?style=for-the-badge&logoColor=white" },
    { name: "Burp Suite", fallbackColor: "#FF6D00", badge: "Burp_Suite-FF6D00?style=for-the-badge&logoColor=white" },
    { name: "SonarQube", icon: "https://cdn.simpleicons.org/sonarqube/4E9BCD", badge: "SonarQube-4E9BCD?style=for-the-badge&logo=sonarqube&logoColor=white" },
    { name: "Snyk", icon: "https://cdn.simpleicons.org/snyk/4C4A73", badge: "Snyk-4C4A73?style=for-the-badge&logo=snyk&logoColor=white" },
    { name: "Checkmarx", fallbackColor: "#54B848", badge: "Checkmarx-54B848?style=for-the-badge&logoColor=white" },
    { name: "Nessus", fallbackColor: "#00C176", badge: "Nessus-00C176?style=for-the-badge&logoColor=white" },
  ],

  "Monitoring & Observability": [
    { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800", badge: "Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white" },
    { name: "Kibana", icon: "https://cdn.simpleicons.org/kibana/005571", badge: "Kibana-005571?style=for-the-badge&logo=kibana&logoColor=white" },
    { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog/632CA6", badge: "Datadog-632CA6?style=for-the-badge&logo=datadog&logoColor=white" },
    { name: "New Relic", icon: "https://cdn.simpleicons.org/newrelic/1CE783", badge: "New_Relic-1CE783?style=for-the-badge&logo=newrelic&logoColor=white" },
    { name: "Splunk", icon: "https://cdn.simpleicons.org/splunk/000000", badge: "Splunk-000000?style=for-the-badge&logo=splunk&logoColor=white" },
    { name: "ELK Stack", icon: "https://cdn.simpleicons.org/elastic/005571", badge: "ELK_Stack-005571?style=for-the-badge&logo=elastic&logoColor=white" },
    { name: "Prometheus", icon: "https://cdn.simpleicons.org/prometheus/E6522C", badge: "Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white" },
  ],

  "IDEs & Editors": [
    { name: "VS Code", icon: "https://cdn.simpleicons.org/visualstudiocode/007ACC", badge: "VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white" },
    { name: "IntelliJ IDEA", icon: "https://cdn.simpleicons.org/intellijidea/000000", badge: "IntelliJ_IDEA-000000?style=for-the-badge&logo=intellijidea&logoColor=white" },
    { name: "Eclipse", icon: "https://cdn.simpleicons.org/eclipseide/2C2255", badge: "Eclipse-2C2255?style=for-the-badge&logo=eclipseide&logoColor=white" },
    { name: "PyCharm", icon: "https://cdn.simpleicons.org/pycharm/000000", badge: "PyCharm-000000?style=for-the-badge&logo=pycharm&logoColor=white" },
    { name: "Visual Studio", icon: "https://cdn.simpleicons.org/visualstudio/5C2D91", badge: "Visual_Studio-5C2D91?style=for-the-badge&logo=visualstudio&logoColor=white" },
    { name: "Vim", icon: "https://cdn.simpleicons.org/vim/019733", badge: "Vim-019733?style=for-the-badge&logo=vim&logoColor=white" },
  ],

  "Other Tools": [
    { name: "Charles Proxy", fallbackColor: "#518FCA", badge: "Charles_Proxy-518FCA?style=for-the-badge&logoColor=white" },
    { name: "Fiddler", fallbackColor: "#3CC73C", badge: "Fiddler-3CC73C?style=for-the-badge&logoColor=white" },
    { name: "Wireshark", icon: "https://cdn.simpleicons.org/wireshark/1679A7", badge: "Wireshark-1679A7?style=for-the-badge&logo=wireshark&logoColor=white" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", badge: "Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" },
    { name: "Notion", icon: "https://cdn.simpleicons.org/notion/000000", badge: "Notion-000000?style=for-the-badge&logo=notion&logoColor=white" },
    { name: "Confluence", icon: "https://cdn.simpleicons.org/confluence/172B4D", badge: "Confluence-172B4D?style=for-the-badge&logo=confluence&logoColor=white" },
    { name: "Slack", icon: "https://cdn.simpleicons.org/slack/4A154B", badge: "Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" },
    { name: "Microsoft Teams", icon: "https://cdn.simpleicons.org/microsoftteams/6264A7", badge: "Microsoft_Teams-6264A7?style=for-the-badge&logo=microsoftteams&logoColor=white" },
  ],
};

// ============================================
// DOM Ready
// ============================================
document.addEventListener("DOMContentLoaded", () => {
  renderExpertise();
  renderCertifications();
  renderMethodologies();
  renderSkills();
  bindEvents();
});

// ============================================
// Render Functions
// ============================================

function renderExpertise() {
  const container = document.getElementById("expertise-container");
  container.innerHTML = expertiseData
    .map(
      (item, i) => `
    <label class="skill-item" data-name="${item.name}">
      <input type="checkbox" name="expertise" value="${item.name}">
      <span class="skill-icon-fallback" style="background:${item.color}">${item.icon}</span>
      <span class="skill-name">${item.name}</span>
    </label>
  `
    )
    .join("");
}

function renderCertifications() {
  const container = document.getElementById("certifications-container");
  container.innerHTML = certificationsData
    .map(
      (item) => `
    <label class="skill-item" data-name="${item.name}">
      <input type="checkbox" name="certification" value="${item.name}">
      <span class="skill-icon-fallback" style="background:${item.color}">${item.icon}</span>
      <span class="skill-name">${item.name}</span>
    </label>
  `
    )
    .join("");
}

function renderMethodologies() {
  const container = document.getElementById("methodologies-container");
  container.innerHTML = methodologiesData
    .map(
      (item) => `
    <label class="skill-item" data-name="${item.name}">
      <input type="checkbox" name="methodology" value="${item.name}">
      <span class="skill-icon-fallback" style="background:${item.color}">${item.icon}</span>
      <span class="skill-name">${item.name}</span>
    </label>
  `
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-container");
  let html = "";

  for (const [category, tools] of Object.entries(skillsData)) {
    html += `<div class="skills-category" data-category="${category}">`;
    html += `<h3 class="category-title">${category}</h3>`;
    html += `<div class="skills-grid">`;

    for (const tool of tools) {
      const iconHtml = tool.icon
        ? `<img class="skill-icon" src="${tool.icon}" alt="${tool.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
           <span class="skill-icon-fallback" style="background:${tool.fallbackColor || '#6C3FD1'};display:none">${tool.name.charAt(0)}</span>`
        : `<span class="skill-icon-fallback" style="background:${tool.fallbackColor || '#6C3FD1'}">${tool.name.charAt(0)}</span>`;

      html += `
        <label class="skill-item" data-name="${tool.name}" data-badge="${tool.badge || ""}">
          <input type="checkbox" name="skill" value="${tool.name}" data-badge="${tool.badge || ""}">
          ${iconHtml}
          <span class="skill-name">${tool.name}</span>
        </label>`;
    }

    html += `</div></div>`;
  }

  container.innerHTML = html;
}

// ============================================
// Event Bindings
// ============================================

function bindEvents() {
  // Skill item selection highlight
  document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("change", (e) => {
      if (e.target.checked) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
    });
  });

  // Skills search filter
  const searchInput = document.getElementById("skillSearch");
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    document.querySelectorAll("#skills-container .skill-item").forEach((item) => {
      const name = item.dataset.name.toLowerCase();
      item.style.display = name.includes(query) ? "" : "none";
    });

    // Show/hide category headers based on visible items
    document.querySelectorAll(".skills-category").forEach((cat) => {
      const allItems = cat.querySelectorAll(".skill-item");
      const hiddenItems = cat.querySelectorAll('.skill-item[style*="none"]');
      cat.style.display = hiddenItems.length === allItems.length ? "none" : "";
    });
  });

  // Generate button
  document.getElementById("btnGenerate").addEventListener("click", generateReadme);
  document.getElementById("btnPreview").addEventListener("click", () => {
    generateReadme();
    switchTab("preview");
  });

  // Copy button
  document.getElementById("btnCopy").addEventListener("click", () => {
    const markdown = document.getElementById("markdownOutput").textContent;
    navigator.clipboard.writeText(markdown).then(() => {
      showToast("Markdown copied to clipboard!", "success");
    }).catch(() => {
      showToast("Failed to copy. Please select and copy manually.", "error");
    });
  });

  // Download button
  document.getElementById("btnDownload").addEventListener("click", () => {
    const markdown = document.getElementById("markdownOutput").textContent;
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "README.md";
    a.click();
    URL.revokeObjectURL(url);
    showToast("README.md downloaded!", "success");
  });

  // Tab switching
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // Reset button
  document.getElementById("btnReset").addEventListener("click", () => {
    document.querySelectorAll(".form-input").forEach((input) => (input.value = ""));
    document.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
      const defaultChecked = ["addonVisitors", "addonStats", "addonStreak", "addonTopLangs", "addonTypingSvg"];
      cb.checked = defaultChecked.includes(cb.id);
    });
    document.querySelectorAll(".skill-item").forEach((item) => item.classList.remove("selected"));
    document.getElementById("output-section").style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
    showToast("Form reset!", "success");
  });
}

function switchTab(tab) {
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach((c) => c.classList.remove("active"));
  document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add("active");
  document.getElementById(tab === "markdown" ? "markdownTab" : "previewTab").classList.add("active");
}

function showToast(message, type = "") {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.className = "toast show " + type;
  setTimeout(() => {
    toast.className = "toast";
  }, 3000);
}

// ============================================
// README Generation
// ============================================

function generateReadme() {
  const lines = [];
  const githubUsername = document.getElementById("socialGithub").value.trim();

  // --- Header ---
  const titleTag = document.querySelector('input[name="titleTag"]:checked').value;
  const titleText = escapeHtml(document.getElementById("titleText").value.trim()) || "Hi 👋, I'm a QA Engineer";
  const subtitleText = escapeHtml(document.getElementById("subtitleText").value.trim());

  // Wave header
  if (document.getElementById("addonWaveHeader").checked) {
    lines.push(`<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=6C3FD1&height=120&section=header"/>`);
    lines.push("");
  }

  // Typing SVG
  if (document.getElementById("addonTypingSvg").checked && subtitleText) {
    lines.push(`<${titleTag} align="center">${titleText}</${titleTag}>`);
    lines.push("");
    const typingLines = subtitleText.split(",").map((s) => s.trim()).join(";");
    lines.push(
      `<p align="center">\n  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&pause=1000&color=6C3FD1&center=true&vCenter=true&random=false&width=500&lines=${encodeURIComponent(typingLines)}" alt="Typing SVG" />\n</p>`
    );
    lines.push("");
  } else {
    lines.push(`<${titleTag} align="center">${titleText}</${titleTag}>`);
    if (subtitleText) {
      lines.push(`<h3 align="center">${subtitleText}</h3>`);
    }
    lines.push("");
  }

  // Profile visitors
  if (document.getElementById("addonVisitors").checked && githubUsername) {
    lines.push(
      `<p align="center">\n  <img src="https://komarev.com/ghpvc/?username=${githubUsername}&label=Profile%20views&color=6C3FD1&style=flat" alt="Profile views" />\n</p>`
    );
    lines.push("");
  }

  // Trophies
  if (document.getElementById("addonTrophies").checked && githubUsername) {
    lines.push(
      `<p align="center">\n  <a href="https://github.com/ryo-ma/github-profile-trophy">\n    <img src="https://github-profile-trophy.vercel.app/?username=${githubUsername}&theme=onedark&no-frame=true&row=1&column=7" alt="Trophies" />\n  </a>\n</p>`
    );
    lines.push("");
  }

  // --- Work Section ---
  const workItems = [];
  const workCompany = escapeHtml(document.getElementById("workCompany").value.trim());
  const workCompanyLink = sanitizeUrl(document.getElementById("workCompanyLink").value.trim());
  if (workCompany) {
    workItems.push(workCompanyLink
      ? `- 🔭 I'm currently working at [${workCompany}](${workCompanyLink})`
      : `- 🔭 I'm currently working at **${workCompany}**`
    );
  }

  const collabProject = escapeHtml(document.getElementById("collabProject").value.trim());
  const collabLink = sanitizeUrl(document.getElementById("collabLink").value.trim());
  if (collabProject) {
    workItems.push(collabLink
      ? `- 🤝 I'm looking to collaborate on [${collabProject}](${collabLink})`
      : `- 🤝 I'm looking to collaborate on **${collabProject}**`
    );
  }

  const helpProject = escapeHtml(document.getElementById("helpProject").value.trim());
  const helpLink = sanitizeUrl(document.getElementById("helpLink").value.trim());
  if (helpProject) {
    workItems.push(helpLink
      ? `- 🔍 I'm looking for help with [${helpProject}](${helpLink})`
      : `- 🔍 I'm looking for help with **${helpProject}**`
    );
  }

  const learning = escapeHtml(document.getElementById("learning").value.trim());
  if (learning) workItems.push(`- 🌱 I'm currently learning **${learning}**`);

  const askAbout = escapeHtml(document.getElementById("askAbout").value.trim());
  if (askAbout) workItems.push(`- 💬 Ask me about **${askAbout}**`);

  const reachMe = escapeHtml(document.getElementById("reachMe").value.trim());
  if (reachMe) workItems.push(`- 📫 How to reach me: **${reachMe}**`);

  const portfolioLink = sanitizeUrl(document.getElementById("portfolioLink").value.trim());
  if (portfolioLink) workItems.push(`- 🌐 All of my projects are available at [${portfolioLink}](${portfolioLink})`);

  const blogLink = sanitizeUrl(document.getElementById("blogLink").value.trim());
  if (blogLink) workItems.push(`- 📝 I regularly write articles on [${blogLink}](${blogLink})`);

  const resumeLink = sanitizeUrl(document.getElementById("resumeLink").value.trim());
  if (resumeLink) workItems.push(`- 📄 Know about my experiences [Resume](${resumeLink})`);

  const funFact = escapeHtml(document.getElementById("funFact").value.trim());
  if (funFact) workItems.push(`- ⚡ Fun fact: **${funFact}**`);

  if (workItems.length > 0) {
    lines.push(...workItems);
    lines.push("");
  }

  // --- QA Expertise ---
  const selectedExpertise = getCheckedValues("expertise");
  if (selectedExpertise.length > 0) {
    lines.push(`## 🧪 Testing Expertise`);
    lines.push("");
    const expertiseBadges = selectedExpertise.map((name) => {
      const item = expertiseData.find((e) => e.name === name);
      const badgeName = encodeBadgeName(name);
      return `![${name}](https://img.shields.io/badge/${badgeName}-${item.color.replace("#", "")}?style=for-the-badge&logoColor=white)`;
    });
    lines.push(`<p align="left">\n${expertiseBadges.join(" ")}\n</p>`);
    lines.push("");
  }

  // --- QA Methodologies ---
  const selectedMethodologies = getCheckedValues("methodology");
  if (selectedMethodologies.length > 0) {
    lines.push(`## 📋 QA Methodologies`);
    lines.push("");
    const methodBadges = selectedMethodologies.map((name) => {
      const item = methodologiesData.find((m) => m.name === name);
      const badgeName = encodeBadgeName(name);
      return `![${name}](https://img.shields.io/badge/${badgeName}-${item.color.replace("#", "")}?style=for-the-badge&logoColor=white)`;
    });
    lines.push(`<p align="left">\n${methodBadges.join(" ")}\n</p>`);
    lines.push("");
  }

  // --- Skills & Tools ---
  const selectedSkills = {};
  document.querySelectorAll('input[name="skill"]:checked').forEach((cb) => {
    const category = cb.closest(".skills-category").dataset.category;
    if (!selectedSkills[category]) selectedSkills[category] = [];
    selectedSkills[category].push({
      name: cb.value,
      badge: cb.dataset.badge,
    });
  });

  if (Object.keys(selectedSkills).length > 0) {
    lines.push(`## 🛠️ Tools & Technologies`);
    lines.push("");

    for (const [category, tools] of Object.entries(selectedSkills)) {
      lines.push(`### ${category}`);
      lines.push("");
      const badges = tools.map(
        (t) => `![${t.name}](https://img.shields.io/badge/${t.badge})`
      );
      lines.push(`<p align="left">\n${badges.join(" ")}\n</p>`);
      lines.push("");
    }
  }

  // --- Certifications ---
  const selectedCerts = getCheckedValues("certification");
  if (selectedCerts.length > 0) {
    lines.push(`## 🏆 Certifications`);
    lines.push("");
    const certBadges = selectedCerts.map((name) => {
      const item = certificationsData.find((c) => c.name === name);
      const badgeName = encodeBadgeName(name);
      return `![${name}](https://img.shields.io/badge/${badgeName}-${item.color.replace("#", "")}?style=for-the-badge&logoColor=white)`;
    });
    lines.push(`<p align="left">\n${certBadges.join(" ")}\n</p>`);
    lines.push("");
  }

  // --- Warn if GitHub-dependent add-ons are checked but no username ---
  const githubDependentAddons = ["addonVisitors", "addonTrophies", "addonStats", "addonStreak", "addonTopLangs", "addonContribGraph"];
  const anyGithubAddonChecked = githubDependentAddons.some((id) => document.getElementById(id).checked);
  if (anyGithubAddonChecked && !githubUsername) {
    showToast("GitHub username is required for stats add-ons. Some sections were skipped.", "error");
  }

  // --- Social Links ---
  const socials = [];
  const socialLinkedin = encodeURIComponent(document.getElementById("socialLinkedin").value.trim());
  const socialTwitter = encodeURIComponent(document.getElementById("socialTwitter").value.trim());
  const socialStackoverflow = encodeURIComponent(document.getElementById("socialStackoverflow").value.trim());
  const socialMedium = encodeURIComponent(document.getElementById("socialMedium").value.trim());
  const socialDevto = encodeURIComponent(document.getElementById("socialDevto").value.trim());
  const socialHashnode = encodeURIComponent(document.getElementById("socialHashnode").value.trim());
  const socialYoutube = encodeURIComponent(document.getElementById("socialYoutube").value.trim());
  const socialWebsite = sanitizeUrl(document.getElementById("socialWebsite").value.trim());
  const socialDiscord = document.getElementById("socialDiscord").value.trim();
  const socialEmail = document.getElementById("socialEmail").value.trim();
  const socialInstagram = encodeURIComponent(document.getElementById("socialInstagram").value.trim());

  if (socialLinkedin) socials.push(`[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/${socialLinkedin})`);
  if (socialTwitter) socials.push(`[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/${socialTwitter})`);
  if (socialStackoverflow) socials.push(`[![Stack Overflow](https://img.shields.io/badge/Stack_Overflow-FE7A16?style=for-the-badge&logo=stack-overflow&logoColor=white)](https://stackoverflow.com/users/${socialStackoverflow})`);
  if (socialMedium) socials.push(`[![Medium](https://img.shields.io/badge/Medium-12100E?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@${socialMedium})`);
  if (socialDevto) socials.push(`[![Dev.to](https://img.shields.io/badge/Dev.to-0A0A0A?style=for-the-badge&logo=devdotto&logoColor=white)](https://dev.to/${socialDevto})`);
  if (socialHashnode) socials.push(`[![Hashnode](https://img.shields.io/badge/Hashnode-2962FF?style=for-the-badge&logo=hashnode&logoColor=white)](https://hashnode.com/@${socialHashnode})`);
  if (socialYoutube) socials.push(`[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtube.com/${socialYoutube})`);
  if (socialWebsite) socials.push(`[![Website](https://img.shields.io/badge/Website-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](${socialWebsite})`);
  if (socialDiscord) {
    const discordUrl = isValidUrl(socialDiscord) ? socialDiscord : `https://discord.com/users/${encodeURIComponent(socialDiscord)}`;
    socials.push(`[![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white)](${discordUrl})`);
  }
  if (socialEmail) socials.push(`[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${encodeURIComponent(socialEmail)})`);
  if (socialInstagram) socials.push(`[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/${socialInstagram})`);

  if (socials.length > 0) {
    lines.push(`## 🤝 Connect with me`);
    lines.push("");
    lines.push(`<p align="left">\n${socials.join(" ")}\n</p>`);
    lines.push("");
  }

  // --- GitHub Stats ---
  const theme = document.querySelector('input[name="statsTheme"]:checked').value;

  if (githubUsername && (
    document.getElementById("addonStats").checked ||
    document.getElementById("addonStreak").checked ||
    document.getElementById("addonTopLangs").checked
  )) {
    lines.push(`## 📊 GitHub Stats`);
    lines.push("");

    if (document.getElementById("addonStats").checked) {
      lines.push(
        `<p align="center">\n  <img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&theme=${theme}&hide_border=false&include_all_commits=true&count_private=true" alt="GitHub Stats" />\n</p>`
      );
      lines.push("");
    }

    if (document.getElementById("addonStreak").checked) {
      lines.push(
        `<p align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=${theme}&hide_border=false" alt="GitHub Streak" />\n</p>`
      );
      lines.push("");
    }

    if (document.getElementById("addonTopLangs").checked) {
      lines.push(
        `<p align="center">\n  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&theme=${theme}&hide_border=false&include_all_commits=true&count_private=true&layout=compact" alt="Top Languages" />\n</p>`
      );
      lines.push("");
    }
  }

  // Contribution graph
  if (document.getElementById("addonContribGraph").checked && githubUsername) {
    lines.push(
      `<p align="center">\n  <img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true" alt="Contribution Graph" />\n</p>`
    );
    lines.push("");
  }

  // Random dev quote
  if (document.getElementById("addonQuote").checked) {
    lines.push(`## 💭 Random Dev Quote`);
    lines.push("");
    lines.push(
      `<p align="center">\n  <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&theme=${theme}" alt="Random Dev Quote" />\n</p>`
    );
    lines.push("");
  }

  // Wave footer
  if (document.getElementById("addonWaveHeader").checked) {
    lines.push(`<img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=6C3FD1&height=120&section=footer"/>`);
    lines.push("");
  }

  // --- Footer ---
  lines.push(`---`);
  lines.push(`<p align="center">Generated with ❤️ using <b>QA Engineer GitHub Profile README Generator</b></p>`);

  const markdown = lines.join("\n");

  // Display output
  document.getElementById("markdownOutput").textContent = markdown;
  document.getElementById("output-section").style.display = "block";

  // Generate preview HTML
  generatePreview(markdown);

  // Scroll to output
  document.getElementById("output-section").scrollIntoView({ behavior: "smooth", block: "start" });
}

// ============================================
// Preview Generation
// ============================================

function generatePreview(markdown) {
  let html = markdown;

  // Convert markdown headers
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Images MUST be converted before links (images contain link syntax as substring)
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-height:160px;margin:4px">');

  // Convert markdown links (after images are already replaced)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  // Convert bold
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  // Convert list items
  html = html.replace(/^- (.+)$/gm, "<li>$1</li>");

  // Convert horizontal rules
  html = html.replace(/^---$/gm, "<hr>");

  // Line breaks
  html = html.replace(/\n\n/g, "<br><br>");

  // Sanitize: strip any script tags or event handlers that could come from user input
  html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
  html = html.replace(/\bon\w+\s*=\s*["'][^"']*["']/gi, "");
  html = html.replace(/javascript\s*:/gi, "");

  document.getElementById("previewOutput").innerHTML = html;
}

// ============================================
// Utility
// ============================================

function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(
    (cb) => cb.value
  );
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function isValidUrl(str) {
  try {
    const url = new URL(str);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

function sanitizeUrl(str) {
  if (!str) return "";
  if (isValidUrl(str)) return str;
  if (isValidUrl("https://" + str)) return "https://" + str;
  return "";
}

function encodeBadgeName(name) {
  return encodeURIComponent(name).replace(/%20/g, "_").replace(/-/g, "--");
}
