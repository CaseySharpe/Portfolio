
/**
   * List of possible skills
   */
export enum Skill {
    Java = 'Java',
    HTML = 'HTML',
    Python = 'Python',
    CSS = 'CSS',
    TypeScript = 'Typescript',
    JavaScript = 'Javascript',
    AndroidStudio = 'Andriod Studio',
    SQL = 'SQL',
    Angular = 'Angular',
    PHP = 'PHP',
    Scala = 'Scala'
}

/**
   * Interface to store sample Projects
   */
export interface Project{
  /**
   * Project title
   */
    title: string;
  /**
   * Project subtitle, should include class and/or timeframe
   */
    subtitle: string;
  /**
   * Description of project
   */    
    description: string;
  /**
   * Github link if applicable
   */    
    repoLink?: string;
  /**
   * Link to either youtube video or image sources (not implemented)
   */    
    mediaLink?: string;
  /**
   * List of skills associated with a project (to fill in chips)
   */    
    skills: Skill[];

    isSelected?: boolean
}

/**
   * Interface to store work Experience
   */
 export interface Experience{
    /**
     * Job title
     */
      title: string;
    /**
     * Job description
     */
      jobDescription: string;
    /**
     * Job starting date (Month YYYY)
     */
      startingDate: string;
    /**
     * Job starting date (Month YYYY or Current)
     */
       endDate?: string;
    /**
     * Description of job
     */    
      description: string;
    /**
     * Link to company logo
     */    
      mediaLink?: string;
    /**
     * List of skills associated with the job (to fill in chips)
     */    
      skills: Skill[]
  }

  export interface Education{
      school: string;
      major: string;
      GPA: string;
      duration: string;   
      description: string; 
      activities: string;
      logo?: string;
  }