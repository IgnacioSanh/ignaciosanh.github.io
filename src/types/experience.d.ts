interface Experience {
  date: string;
  title: string;
  company: string;
  companyLink?: string;
  description: string;
  link?: string;
  technologies?: TechnologyIcon[];
}

type TechnologyIcon = 'react' | 'typescript' | 'javascript' | 'redux' | 'react native' | 'nextjs' | 'jira' | 'github' | 'node' | 'grails' | 'java' | 'sql-server' | '.net' | 'jest' | 'c#'| 'powerbi' | 'azure' | 'python' ;