
import React from 'react';
import { Container, Typography, Box, Grid, Link, Paper, Divider, Chip } from '@mui/material';
import { BookOpen, Video, Globe, Tool, Award, Brain } from 'lucide-react';

const ResourcesPage = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
        Learning Resources
      </Typography>
      
      <Box my={6}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Recommended Resources
        </Typography>
        <Typography variant="body1" paragraph>
          We've curated the best learning resources across various formats to help you master the skills needed for future careers.
        </Typography>
        
        <Grid container spacing={4} mt={2}>
          {/* Online Courses */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Video size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">Online Courses</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Link href="https://www.coursera.org" target="_blank" rel="noopener">
                    Coursera
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    University-backed courses from institutions like Stanford, MIT, and Google across all tech and business domains.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.edx.org" target="_blank" rel="noopener">
                    edX
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Free courses with optional paid certificates from top universities and organizations.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.udacity.com" target="_blank" rel="noopener">
                    Udacity Nanodegrees
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Industry-aligned programs with hands-on projects and mentorship in cutting-edge fields.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.udemy.com" target="_blank" rel="noopener">
                    Udemy
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Practical, skill-based courses often taught by industry practitioners rather than academics.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.pluralsight.com" target="_blank" rel="noopener">
                    Pluralsight
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Technology skill platform with assessments, learning paths, and in-depth courses for professionals.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.codecademy.com" target="_blank" rel="noopener">
                    Codecademy
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Interactive coding lessons with immediate feedback for programming languages and web development.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.fast.ai" target="_blank" rel="noopener">
                    Fast.ai
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Practical deep learning courses for coders using a top-down teaching approach.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.datacamp.com" target="_blank" rel="noopener">
                    DataCamp
                  </Link>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Specialized courses for data science, analytics, and machine learning with interactive exercises.
                  </Typography>
                </li>
              </Box>
            </Paper>
          </Grid>
          
          {/* Books & Publications */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <BookOpen size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">Books & Publications</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body1" fontWeight="medium">Technology & Programming</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Typography variant="body2" paragraph>
                        "Clean Code" by Robert C. Martin - Principles for writing maintainable code
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "The Pragmatic Programmer" by Andrew Hunt & David Thomas - Practical approaches to software development
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "Hands-On Machine Learning with Scikit-Learn and TensorFlow" by Aurélien Géron
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "AI and Machine Learning for Coders" by Laurence Moroney - Practical introduction to AI for developers
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Career Development</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Typography variant="body2" paragraph>
                        "Range: Why Generalists Triumph in a Specialized World" by David Epstein
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "Deep Work" by Cal Newport - Rules for focused success in a distracted world
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "The Squiggly Career" by Helen Tupper & Sarah Ellis - Navigate and thrive in the changing world of work
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "Designing Your Life" by Bill Burnett & Dave Evans - How to build a well-lived, joyful life
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Future Trends</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Typography variant="body2" paragraph>
                        "The Inevitable" by Kevin Kelly - Understanding the 12 technological forces shaping our future
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "AI Superpowers" by Kai-Fu Lee - China, Silicon Valley, and the New World Order
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "Life 3.0" by Max Tegmark - Being human in the age of Artificial Intelligence
                      </Typography>
                    </li>
                    <li>
                      <Typography variant="body2" paragraph>
                        "The Future Is Faster Than You Think" by Peter Diamandis & Steven Kotler
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Academic Journals</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.nature.com/nature/research-articles" target="_blank" rel="noopener">
                        Nature
                      </Link>
                      <Typography variant="body2" paragraph>
                        Leading international scientific journal covering all sciences
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.sciencemag.org/" target="_blank" rel="noopener">
                        Science
                      </Link>
                      <Typography variant="body2" paragraph>
                        Peer-reviewed academic journal and leading outlet for scientific research
                      </Typography>
                    </li>
                  </Box>
                </li>
              </Box>
            </Paper>
          </Grid>
          
          {/* Online Platforms & Communities */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Globe size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">Online Platforms & Communities</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body1" fontWeight="medium">Q&A and Knowledge Sharing</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://stackoverflow.com" target="_blank" rel="noopener">
                        Stack Overflow
                      </Link>
                      <Typography variant="body2" paragraph>
                        Community-driven Q&A for programmers with extensive archives of solved problems.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.reddit.com" target="_blank" rel="noopener">
                        Reddit - Learning Communities
                      </Link>
                      <Typography variant="body2" paragraph>
                        Specialized subreddits like r/learnprogramming, r/datascience, r/MachineLearning.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.quora.com" target="_blank" rel="noopener">
                        Quora
                      </Link>
                      <Typography variant="body2" paragraph>
                        Q&A platform with expert contributors across many specialized domains.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Project-Based Learning</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://github.com" target="_blank" rel="noopener">
                        GitHub
                      </Link>
                      <Typography variant="body2" paragraph>
                        Access open-source projects, tutorials, and educational repositories.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.kaggle.com" target="_blank" rel="noopener">
                        Kaggle
                      </Link>
                      <Typography variant="body2" paragraph>
                        Data science competitions, notebooks, datasets, and learning resources.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.freecodecamp.org" target="_blank" rel="noopener">
                        freeCodeCamp
                      </Link>
                      <Typography variant="body2" paragraph>
                        Free coding challenges, projects, and certifications in web development.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Professional Networks</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.linkedin.com/learning" target="_blank" rel="noopener">
                        LinkedIn Learning
                      </Link>
                      <Typography variant="body2" paragraph>
                        Professional courses with business, technology, and creative skills.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.meetup.com" target="_blank" rel="noopener">
                        Meetup
                      </Link>
                      <Typography variant="body2" paragraph>
                        Find local professional groups and learning events in your industry.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://discord.com" target="_blank" rel="noopener">
                        Discord Learning Servers
                      </Link>
                      <Typography variant="body2" paragraph>
                        Specialized learning communities with real-time help and resources.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Interactive Learning Platforms</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://exercism.org" target="_blank" rel="noopener">
                        Exercism
                      </Link>
                      <Typography variant="body2" paragraph>
                        Code practice and mentorship in 50+ programming languages.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.hackerrank.com" target="_blank" rel="noopener">
                        HackerRank
                      </Link>
                      <Typography variant="body2" paragraph>
                        Coding challenges and competitions for practice and job preparation.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://leetcode.com" target="_blank" rel="noopener">
                        LeetCode
                      </Link>
                      <Typography variant="body2" paragraph>
                        Platform to enhance coding skills through practice problems and contests.
                      </Typography>
                    </li>
                  </Box>
                </li>
              </Box>
            </Paper>
          </Grid>
          
          {/* Open Educational Resources */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Award size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">Open Educational Resources</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body1" fontWeight="medium">University Open Courseware</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://ocw.mit.edu" target="_blank" rel="noopener">
                        MIT OpenCourseWare
                      </Link>
                      <Typography variant="body2" paragraph>
                        Free access to MIT course materials across disciplines.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://online.stanford.edu/free-courses" target="_blank" rel="noopener">
                        Stanford Online
                      </Link>
                      <Typography variant="body2" paragraph>
                        Free courses and materials from Stanford University.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://oyc.yale.edu" target="_blank" rel="noopener">
                        Yale Open Courses
                      </Link>
                      <Typography variant="body2" paragraph>
                        Free access to introductory courses taught by Yale faculty.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Education Initiatives</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.khanacademy.org" target="_blank" rel="noopener">
                        Khan Academy
                      </Link>
                      <Typography variant="body2" paragraph>
                        Free educational resources for math, science, computing, and more.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.w3schools.com" target="_blank" rel="noopener">
                        W3Schools
                      </Link>
                      <Typography variant="body2" paragraph>
                        Free web development tutorials and references.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://developer.mozilla.org" target="_blank" rel="noopener">
                        MDN Web Docs
                      </Link>
                      <Typography variant="body2" paragraph>
                        Comprehensive resource for web standards, Mozilla's learning platform.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Video Resources</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ" target="_blank" rel="noopener">
                        freeCodeCamp YouTube Channel
                      </Link>
                      <Typography variant="body2" paragraph>
                        In-depth coding tutorials and courses on various programming topics.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="_blank" rel="noopener">
                        The Net Ninja
                      </Link>
                      <Typography variant="body2" paragraph>
                        Web development tutorials from basics to advanced frameworks.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/c/3blue1brown" target="_blank" rel="noopener">
                        3Blue1Brown
                      </Link>
                      <Typography variant="body2" paragraph>
                        Visual explanations of mathematical concepts often used in computer science.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.youtube.com/c/lexfridman" target="_blank" rel="noopener">
                        Lex Fridman Podcast
                      </Link>
                      <Typography variant="body2" paragraph>
                        Conversations with leaders in AI, science, and technology.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Documentation & Guides</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener">
                        Python Official Documentation
                      </Link>
                      <Typography variant="body2" paragraph>
                        Comprehensive Python language reference and tutorials.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener">
                        React Documentation
                      </Link>
                      <Typography variant="body2" paragraph>
                        Official guides and API reference for React.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.tensorflow.org/tutorials" target="_blank" rel="noopener">
                        TensorFlow Tutorials
                      </Link>
                      <Typography variant="body2" paragraph>
                        Official guides for machine learning with TensorFlow.
                      </Typography>
                    </li>
                  </Box>
                </li>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      
      <Box my={6}>
        <Typography variant="h4" component="h2" fontWeight="bold" gutterBottom>
          Master AI Tools for Accelerated Learning
        </Typography>
        <Typography variant="body1" paragraph>
          Leverage these AI-powered tools to enhance your learning process and master skills more efficiently.
        </Typography>
        
        <Grid container spacing={4} mt={2}>
          {/* AI Learning Assistants */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Brain size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">AI Learning Assistants</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Link href="https://chat.openai.com" target="_blank" rel="noopener">
                    ChatGPT
                  </Link>
                  <Typography variant="body2" paragraph>
                    AI assistant for explanations, tutoring, and answering questions. Effective prompts:
                    <Box component="ul" sx={{ pl: 4, mt: 1 }}>
                      <li>"Explain [concept] as if I'm a beginner with no background in this field."</li>
                      <li>"Create a step-by-step learning path for becoming proficient in [skill]."</li>
                      <li>"What are common misconceptions about [topic] that beginners should avoid?"</li>
                      <li>"Generate practice problems for [topic] at [beginner/intermediate/advanced] level."</li>
                      <li>"Compare and contrast [concept A] and [concept B] with examples of when to use each."</li>
                      <li>"I'm stuck on this problem: [describe problem]. Can you guide me through the thought process without giving the answer directly?"</li>
                    </Box>
                  </Typography>
                </li>
                <li>
                  <Link href="https://bard.google.com" target="_blank" rel="noopener">
                    Google Bard / Gemini
                  </Link>
                  <Typography variant="body2" paragraph>
                    Google's AI assistant with real-time information access. Effective prompts:
                    <Box component="ul" sx={{ pl: 4, mt: 1 }}>
                      <li>"Find the most recent research papers on [topic] and summarize their key findings."</li>
                      <li>"What are the latest developments in [field] in the past year?"</li>
                      <li>"Create a comparison chart of the top learning resources for [skill]."</li>
                      <li>"Show me examples of how [concept] is applied in real-world scenarios."</li>
                      <li>"What skills are currently most in demand for [career] and what's the best way to acquire them?"</li>
                    </Box>
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.perplexity.ai" target="_blank" rel="noopener">
                    Perplexity AI
                  </Link>
                  <Typography variant="body2" paragraph>
                    AI research assistant that cites sources. Effective prompts:
                    <Box component="ul" sx={{ pl: 4, mt: 1 }}>
                      <li>"Create a comprehensive literature review on [topic]."</li>
                      <li>"What are the most reputable resources for learning [skill]?"</li>
                      <li>"Find academic papers that challenge the conventional wisdom about [concept]."</li>
                      <li>"Compare different methodologies for [process] and their effectiveness."</li>
                      <li>"What are emerging trends in [field] according to recent publications?"</li>
                    </Box>
                  </Typography>
                </li>
                <li>
                  <Link href="https://poe.com" target="_blank" rel="noopener">
                    Poe
                  </Link>
                  <Typography variant="body2" paragraph>
                    Platform with access to multiple AI models for learning assistance. Effective for comparing explanations from different AI models on the same topic.
                  </Typography>
                </li>
                <li>
                  <Link href="https://www.khanmigo.org" target="_blank" rel="noopener">
                    Khanmigo
                  </Link>
                  <Typography variant="body2" paragraph>
                    AI tutor from Khan Academy designed specifically for educational contexts. Provides step-by-step guidance for problem-solving.
                  </Typography>
                </li>
              </Box>
            </Paper>
          </Grid>
          
          {/* AI Content Creation & Study Tools */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Tool size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">AI Content Creation & Study Tools</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body1" fontWeight="medium">Note-Taking & Knowledge Management</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.notion.so" target="_blank" rel="noopener">
                        Notion AI
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI-enhanced note-taking with features to summarize, improve writing, and generate content. 
                        Best for creating structured knowledge bases and learning wikis.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.obsidian.md" target="_blank" rel="noopener">
                        Obsidian
                      </Link>
                      <Typography variant="body2" paragraph>
                        Knowledge graph note-taking that helps connect concepts. Ideal for building a personal learning system.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://elicit.org" target="_blank" rel="noopener">
                        Elicit
                      </Link>
                      <Typography variant="body2" paragraph>
                        Research assistant that helps you find papers, extract key information, and summarize research.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Learning Content Generation</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://quillbot.com" target="_blank" rel="noopener">
                        QuillBot
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI paraphrasing tool for reformulating complex content into more understandable language.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.descript.com" target="_blank" rel="noopener">
                        Descript
                      </Link>
                      <Typography variant="body2" paragraph>
                        Audio/video editor with AI transcription, allowing easy creation of learning materials.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.synthesia.io" target="_blank" rel="noopener">
                        Synthesia
                      </Link>
                      <Typography variant="body2" paragraph>
                        Create AI video presentations from text without needing to film yourself.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.beautiful.ai" target="_blank" rel="noopener">
                        Beautiful.ai
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI-powered presentation tool that automatically designs slides as you add content.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Flashcards & Spaced Repetition</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://ankiweb.net" target="_blank" rel="noopener">
                        Anki
                      </Link>
                      <Typography variant="body2" paragraph>
                        Spaced repetition flashcard system. Use AI assistants to generate card decks for any subject.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.memrise.com" target="_blank" rel="noopener">
                        Memrise
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI-driven language learning platform with spaced repetition and contextual learning.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.remnote.com" target="_blank" rel="noopener">
                        RemNote
                      </Link>
                      <Typography variant="body2" paragraph>
                        Note-taking app with built-in spaced repetition for converting notes to flashcards.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">AI Coding Assistants</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://github.com/features/copilot" target="_blank" rel="noopener">
                        GitHub Copilot
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI pair programmer that suggests code as you type. Effective prompts:
                        <Box component="ul" sx={{ pl: 4, mt: 1 }}>
                          <li>Add detailed comments describing what you want to implement before coding</li>
                          <li>Write test cases before implementation to get better function suggestions</li>
                          <li>Use "// Explain this code:" comment to get explanations of complex code</li>
                        </Box>
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.replit.com/ai" target="_blank" rel="noopener">
                        Replit Ghostwriter
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI coding assistant integrated with Replit's online IDE. Great for learning to code through guided projects.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.tabnine.com" target="_blank" rel="noopener">
                        Tabnine
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI code completion tool that learns your coding patterns and helps with syntax.
                      </Typography>
                    </li>
                  </Box>
                </li>
              </Box>
            </Paper>
          </Grid>
          
          {/* Specialized AI Learning Tools */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Brain size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">Specialized AI Learning Tools</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body1" fontWeight="medium">Language Learning</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.duolingo.com" target="_blank" rel="noopener">
                        Duolingo
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI-powered language learning app that adapts to your progress.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.deepl.com/write" target="_blank" rel="noopener">
                        DeepL Write
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI writing assistant for improving language writing skills with native-level suggestions.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://speechling.com" target="_blank" rel="noopener">
                        Speechling
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI-powered pronunciation coach with human feedback for language learners.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Math & Science</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.wolframalpha.com" target="_blank" rel="noopener">
                        Wolfram Alpha
                      </Link>
                      <Typography variant="body2" paragraph>
                        Computational knowledge engine for math, science, and engineering problems.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.photomath.app" target="_blank" rel="noopener">
                        Photomath
                      </Link>
                      <Typography variant="body2" paragraph>
                        Scan math problems with your camera for step-by-step solutions and explanations.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.geogebra.org" target="_blank" rel="noopener">
                        GeoGebra
                      </Link>
                      <Typography variant="body2" paragraph>
                        Interactive mathematics software for learning geometry, algebra, and calculus.
                      </Typography>
                    </li>
                  </Box>
                </li>
                <li>
                  <Typography variant="body1" fontWeight="medium">Design & Creativity</Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    <li>
                      <Link href="https://www.canva.com" target="_blank" rel="noopener">
                        Canva
                      </Link>
                      <Typography variant="body2" paragraph>
                        Design platform with AI features for creating visual learning materials.
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.midjourney.com" target="_blank" rel="noopener">
                        Midjourney
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI image generation for creating visual concepts and design references. Effective prompts:
                        <Box component="ul" sx={{ pl: 4, mt: 1 }}>
                          <li>"Create a visual representation of [complex concept] that would help a beginner understand it"</li>
                          <li>"Generate a diagram showing the relationship between [concept A] and [concept B]"</li>
                          <li>"Design an infographic that explains the process of [topic]"</li>
                        </Box>
                      </Typography>
                    </li>
                    <li>
                      <Link href="https://www.leonardo.ai" target="_blank" rel="noopener">
                        Leonardo.ai
                      </Link>
                      <Typography variant="body2" paragraph>
                        AI image generation platform for creating visual assets and concept art.
                      </Typography>
                    </li>
                  </Box>
                </li>
              </Box>
            </Paper>
          </Grid>
          
          {/* AI Study Techniques */}
          <Grid item xs={12} md={6}>
            <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Tool size={24} className="mr-2" />
                <Typography variant="h6" component="h3" fontWeight="bold">AI Learning Techniques</Typography>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box component="ul" sx={{ pl: 2 }}>
                <li>
                  <Typography variant="body2" fontWeight="medium">Feynman Technique with AI</Typography>
                  <Typography variant="body2" paragraph>
                    Use AI assistants to simulate the Feynman Technique:
                    <Box component="ol" sx={{ pl: 4, mt: 1 }}>
                      <li>Ask the AI to explain a complex topic in simple terms</li>
                      <li>Try to explain it back to the AI in your own words</li>
                      <li>Ask the AI to identify gaps in your understanding</li>
                      <li>Refine your explanation based on feedback</li>
                    </Box>
                    <Box mt={1}>
                      <Chip label="Prompt Example" color="primary" size="small" sx={{ mr: 1 }} />
                      <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1 }}>
                        "I'm learning about [concept]. Here's my current understanding: [your explanation]. What parts am I missing or misunderstanding? Then ask me questions to deepen my understanding."
                      </Typography>
                    </Box>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" fontWeight="medium">Spaced Repetition Planning</Typography>
                  <Typography variant="body2" paragraph>
                    Use AI to create optimized learning schedules:
                    <Box component="ol" sx={{ pl: 4, mt: 1 }}>
                      <li>List the topics or skills you need to learn</li>
                      <li>Ask AI to create a spaced repetition schedule</li>
                      <li>Have AI generate review questions for each session</li>
                    </Box>
                    <Box mt={1}>
                      <Chip label="Prompt Example" color="primary" size="small" sx={{ mr: 1 }} />
                      <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1 }}>
                        "I need to learn [list of topics] in [timeframe]. Create a spaced repetition schedule that optimizes for retention, with review questions for each topic."
                      </Typography>
                    </Box>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" fontWeight="medium">Deliberate Practice Design</Typography>
                  <Typography variant="body2" paragraph>
                    Ask AI to design targeted practice exercises:
                    <Box component="ol" sx={{ pl: 4, mt: 1 }}>
                      <li>Identify specific skills you want to improve</li>
                      <li>Ask AI to create exercises that isolate that skill</li>
                      <li>Request exercises with increasing difficulty levels</li>
                    </Box>
                    <Box mt={1}>
                      <Chip label="Prompt Example" color="primary" size="small" sx={{ mr: 1 }} />
                      <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1 }}>
                        "I want to improve my skills in [specific skill]. Design a series of deliberate practice exercises that target this specific skill, starting from beginner level and progressing to advanced."
                      </Typography>
                    </Box>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" fontWeight="medium">AI-Assisted Active Recall</Typography>
                  <Typography variant="body2" paragraph>
                    Use AI to test your knowledge:
                    <Box component="ol" sx={{ pl: 4, mt: 1 }}>
                      <li>Study a topic thoroughly</li>
                      <li>Ask AI to generate questions about the topic without looking at your notes</li>
                      <li>Answer the questions from memory</li>
                      <li>Use AI to evaluate your answers and identify gaps</li>
                    </Box>
                    <Box mt={1}>
                      <Chip label="Prompt Example" color="primary" size="small" sx={{ mr: 1 }} />
                      <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1 }}>
                        "I've been studying [topic]. Please generate 10 questions of varying difficulty that would test my understanding. After I answer, evaluate my responses and suggest areas for review."
                      </Typography>
                    </Box>
                  </Typography>
                </li>
                <li>
                  <Typography variant="body2" fontWeight="medium">Progressive Project Learning</Typography>
                  <Typography variant="body2" paragraph>
                    Use AI to design learning projects with gradually increasing complexity:
                    <Box component="ol" sx={{ pl: 4, mt: 1 }}>
                      <li>Tell AI your current skill level and learning goals</li>
                      <li>Ask for a series of progressively challenging projects</li>
                      <li>Get AI guidance as you work through each project</li>
                    </Box>
                    <Box mt={1}>
                      <Chip label="Prompt Example" color="primary" size="small" sx={{ mr: 1 }} />
                      <Typography variant="body2" sx={{ fontStyle: 'italic', mt: 1 }}>
                        "I'm a [beginner/intermediate/advanced] in [skill]. Design a sequence of 5 projects that will help me progress to the next level, with each project building on skills from the previous one."
                      </Typography>
                    </Box>
                  </Typography>
                </li>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ResourcesPage;
