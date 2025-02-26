import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Enhanced stage data with more detailed information
const stages = [
  { 
    name: 'Healthy Commons', 
    cows: 3, 
    pollution: 0, 
    grass: 100, 
    digitalPosts: 9,
    mentalHealth: 90,
    userAttention: 95,
    contentQuality: 90,
    explanation: "In a healthy commons, a few high-quality posts enrich the digital space. User attention is abundant—just as a well-maintained pasture supports a small, contented herd.",
    details: "When social media use is balanced, content is meaningful and enriching. Users have plenty of attention to spare, mental health thrives, and the digital ecosystem flourishes with genuine connections."
  },
  { 
    name: 'Individual Growth', 
    cows: 6, 
    pollution: 15, 
    grass: 80, 
    digitalPosts: 18,
    mentalHealth: 75,
    userAttention: 80,
    contentQuality: 70,
    explanation: "As individuals begin to post more frequently, seeking validation and engagement, the commons starts to show early signs of strain.",
    details: "Each user acts rationally in pursuit of personal gain—more likes, more followers, more engagement. This individual rationality seems harmless, but collectively begins to tax the shared resource of user attention."
  },
  { 
    name: 'Overgrazing', 
    cows: 12, 
    pollution: 40, 
    grass: 50, 
    digitalPosts: 36,
    mentalHealth: 50,
    userAttention: 60,
    contentQuality: 45,
    explanation: "Individual ambition leads to a surge in posts. The digital pasture becomes crowded as user attention is stretched thin, mirroring overgrazed land.",
    details: "The freedom to contribute without restraint leads to an overwhelming flood of content. Attention becomes fragmented, meaningful engagement becomes rare, and low-quality content begins to dominate the space."
  },
  { 
    name: 'Digital Pollution', 
    cows: 16, 
    pollution: 60, 
    grass: 35, 
    digitalPosts: 48,
    mentalHealth: 35,
    userAttention: 40,
    contentQuality: 25,
    explanation: "The commons becomes polluted with clickbait, misinformation, and endless scrolling. Mental health suffers as users become overwhelmed.",
    details: "Just as physical pollution degrades a natural resource, the proliferation of sensationalist, low-quality content acts as digital pollution. The pursuit of engagement at any cost creates an environment that depletes mental wellbeing."
  },
  { 
    name: 'Collapse', 
    cows: 20, 
    pollution: 80, 
    grass: 20, 
    digitalPosts: 60,
    mentalHealth: 20,
    userAttention: 15,
    contentQuality: 10,
    explanation: "Overuse results in collapse: an overload of low-quality posts floods the feed while the pasture (user attention) is nearly exhausted.",
    details: "The short-term gains of constant engagement have led to long-term unsustainability. The digital commons has collapsed under the weight of too many demands on limited attention, leaving users anxious, disconnected, and mentally drained."
  },
  { 
    name: 'Regulation', 
    cows: 8, 
    pollution: 20, 
    grass: 70, 
    digitalPosts: 24,
    mentalHealth: 65,
    userAttention: 75,
    contentQuality: 80,
    explanation: "With regulation in place, the system rebalances. Fewer, more meaningful posts help restore content quality and user attention, like controlled grazing rejuvenates a pasture.",
    details: "Through mutual regulation—platform design, community norms, and individual choices—balance is restored. Content moderation, digital wellbeing tools, and a cultural shift toward quality over quantity allow the commons to regenerate."
  }
];

// Simulation parameters that users can adjust
const defaultParams = {
  userCount: 100,
  postingFrequency: 5, // posts per day per user
  contentQualityFocus: 70, // 0-100 scale
  moderationLevel: 50, // 0-100 scale
  attentionSpan: 60, // 0-100 scale
};

const cowVariants = {
  initial: { opacity: 0, scale: 0.8, y: 0 },
  animate: { 
    opacity: 1, 
    scale: 1,
    y: [0, -5, 0],
    transition: { 
      duration: 1.5, 
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.3 }
  }
};

// Enhanced Cow component with more variations
const Cow = ({ pos, delay, quality }) => {
  // Different cow styles based on content quality
  const cowEmoji = quality > 70 ? "🐄" : quality > 40 ? "🐂" : "🐃";
  const cowSize = quality > 70 ? "50" : quality > 40 ? "45" : "40";
  
  return (
    <motion.g
      variants={cowVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ delay }}
    >
      <text 
        x={pos.x} 
        y={pos.y} 
        fontSize={cowSize} 
        textAnchor="middle" 
        dominantBaseline="middle"
        style={{ filter: quality < 30 ? "blur(1px)" : "none" }}
      >
        {cowEmoji}
      </text>
    </motion.g>
  );
};

// Digital Post Component with animations
const DigitalPost = ({ post, index, stage }) => {
  const isClickbait = post.includes("VIRAL") || post.includes("SHOCKING");
  const isQuality = post.includes("Quality") || post.includes("Thoughtful");
  
  const postVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.4, delay: index * 0.05 }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  // Post styles based on content type
  const getPostStyle = () => {
    if (isClickbait) return "clickbait";
    if (isQuality) return "quality";
    if (stage > 3) return "low-quality";
    return "";
  };

  // Icons based on post type
  const getPostIcon = () => {
    if (isClickbait) return "🔥";
    if (isQuality) return "✨";
    if (stage > 3) return "🗑️";
    return "📱";
  };

  return (
    <motion.div
      className={`post ${getPostStyle()}`}
      variants={postVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <span className="post-icon">{getPostIcon()}</span>
      <div className="post-content">
        <div className="post-text">{post}</div>
        {isClickbait && <div className="post-reactions">👍 1.2K &nbsp; 💭 243 &nbsp; 🔁 892</div>}
        {isQuality && <div className="post-reactions">👍 324 &nbsp; 💭 156 &nbsp; 🔁 87</div>}
        {!isClickbait && !isQuality && <div className="post-reactions">👍 {Math.floor(Math.random() * 100)} &nbsp; 💭 {Math.floor(Math.random() * 30)}</div>}
      </div>
    </motion.div>
  );
};

// Metrics component to display various health indicators
const Metrics = ({ stage, customParams }) => {
  const currentStage = stages[stage];
  
  // Calculate metrics based on stage data and custom parameters
  const metrics = {
    mentalHealth: Math.min(100, Math.max(0, currentStage.mentalHealth + 
      (customParams.contentQualityFocus - 50) * 0.2 +
      (customParams.moderationLevel - 50) * 0.15 -
      (customParams.postingFrequency - 5) * 1)),
    
    contentQuality: Math.min(100, Math.max(0, currentStage.contentQuality + 
      (customParams.contentQualityFocus - 50) * 0.3 +
      (customParams.moderationLevel - 50) * 0.2)),
      
    userAttention: Math.min(100, Math.max(0, currentStage.userAttention + 
      (customParams.attentionSpan - 50) * 0.25 -
      (customParams.postingFrequency - 5) * 1.5)),
  };

  return (
    <div className="metrics-container">
      <h3>Commons Health Metrics</h3>
      <div className="metrics-grid">
        <div className="metric">
          <div className="metric-label">Mental Health</div>
          <div className="metric-bar-container">
            <div 
              className="metric-bar"
              style={{ 
                width: `${metrics.mentalHealth}%`,
                backgroundColor: metrics.mentalHealth > 70 ? '#4CAF50' : 
                  metrics.mentalHealth > 40 ? '#FFC107' : '#F44336'
              }}
            ></div>
          </div>
          <div className="metric-value">{Math.round(metrics.mentalHealth)}%</div>
        </div>
        
        <div className="metric">
          <div className="metric-label">Content Quality</div>
          <div className="metric-bar-container">
            <div 
              className="metric-bar"
              style={{ 
                width: `${metrics.contentQuality}%`,
                backgroundColor: metrics.contentQuality > 70 ? '#4CAF50' : 
                  metrics.contentQuality > 40 ? '#FFC107' : '#F44336'
              }}
            ></div>
          </div>
          <div className="metric-value">{Math.round(metrics.contentQuality)}%</div>
        </div>
        
        <div className="metric">
          <div className="metric-label">User Attention</div>
          <div className="metric-bar-container">
            <div 
              className="metric-bar"
              style={{ 
                width: `${metrics.userAttention}%`,
                backgroundColor: metrics.userAttention > 70 ? '#4CAF50' : 
                  metrics.userAttention > 40 ? '#FFC107' : '#F44336'
              }}
            ></div>
          </div>
          <div className="metric-value">{Math.round(metrics.userAttention)}%</div>
        </div>
      </div>
    </div>
  );
};

// Parameter Control Panel component
const ControlPanel = ({ params, setParams, autoPlay, setAutoPlay }) => {
  return (
    <div className="control-panel">
      <h3>Commons Parameters</h3>
      <div className="controls-grid">
        <div className="control">
          <label>User Count</label>
          <div className="slider-container">
            <input 
              type="range" 
              min="10" 
              max="500" 
              value={params.userCount} 
              onChange={(e) => setParams({...params, userCount: parseInt(e.target.value)})}
            />
            <span className="value">{params.userCount}</span>
          </div>
        </div>
        
        <div className="control">
          <label>Posting Frequency</label>
          <div className="slider-container">
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={params.postingFrequency} 
              onChange={(e) => setParams({...params, postingFrequency: parseInt(e.target.value)})}
            />
            <span className="value">{params.postingFrequency} per day</span>
          </div>
        </div>
        
        <div className="control">
          <label>Content Quality Focus</label>
          <div className="slider-container">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={params.contentQualityFocus} 
              onChange={(e) => setParams({...params, contentQualityFocus: parseInt(e.target.value)})}
            />
            <span className="value">{params.contentQualityFocus}%</span>
          </div>
        </div>
        
        <div className="control">
          <label>Moderation Level</label>
          <div className="slider-container">
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={params.moderationLevel} 
              onChange={(e) => setParams({...params, moderationLevel: parseInt(e.target.value)})}
            />
            <span className="value">{params.moderationLevel}%</span>
          </div>
        </div>
        
        <div className="control">
          <label>User Attention Span</label>
          <div className="slider-container">
            <input 
              type="range" 
              min="10" 
              max="100" 
              value={params.attentionSpan} 
              onChange={(e) => setParams({...params, attentionSpan: parseInt(e.target.value)})}
            />
            <span className="value">{params.attentionSpan}%</span>
          </div>
        </div>
      </div>
      
      <div className="simulation-controls">
        <button 
          className={`auto-play-btn ${autoPlay ? 'active' : ''}`}
          onClick={() => setAutoPlay(!autoPlay)}
        >
          {autoPlay ? '⏸️ Pause Simulation' : '▶️ Auto-Play Simulation'}
        </button>
        <button onClick={() => setParams(defaultParams)}>
          Reset Parameters
        </button>
      </div>
    </div>
  );
};

const CommonsVisualization = () => {
  const [stage, setStage] = useState(0);
  const [params, setParams] = useState(defaultParams);
  const [autoPlay, setAutoPlay] = useState(false);
  const [activeTab, setActiveTab] = useState('visualization');
  
  // Auto-play functionality
  useEffect(() => {
    let timer;
    if (autoPlay) {
      timer = setInterval(() => {
        setStage(prev => (prev + 1) % stages.length);
      }, 6000);
    }
    return () => clearInterval(timer);
  }, [autoPlay]);

  // Determine effective number of cows based on params
  const effectiveCowCount = useMemo(() => {
    const baseCows = stages[stage].cows;
    const userFactor = params.userCount / 100;
    const frequencyFactor = params.postingFrequency / 5;
    const moderationFactor = (100 - params.moderationLevel) / 50;
    
    return Math.max(1, Math.floor(baseCows * userFactor * frequencyFactor * moderationFactor));
  }, [stage, params]);

  // Calculate cow positions with better distribution
  const cowPositions = useMemo(() => {
    const positions = [];
    const margin = 40;
    const grassArea = {
      x: margin,
      y: 240,
      width: 500 - margin * 2,
      height: 260
    };

    // Generate positions in a more organized way
    const cols = Math.ceil(Math.sqrt(effectiveCowCount));
    const cellWidth = grassArea.width / cols;
    const cellHeight = grassArea.height / cols;
    
    for (let i = 0; i < effectiveCowCount; i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      
      // Add some randomness within each cell
      const jitterX = (Math.random() - 0.5) * cellWidth * 0.8;
      const jitterY = (Math.random() - 0.5) * cellHeight * 0.8;
      
      positions.push({
        x: grassArea.x + col * cellWidth + cellWidth/2 + jitterX,
        y: grassArea.y + row * cellHeight + cellHeight/2 + jitterY,
        quality: Math.max(0, params.contentQualityFocus - (stage * 10)) + Math.random() * 20
      });
    }
    return positions;
  }, [effectiveCowCount, stage, params.contentQualityFocus]);

  // Calculate effective pollution based on params
  const effectivePollution = useMemo(() => {
    const basePollution = stages[stage].pollution;
    const userFactor = params.userCount / 100;
    const qualityFactor = (100 - params.contentQualityFocus) / 50;
    const moderationFactor = (100 - params.moderationLevel) / 50;
    
    return Math.max(0, Math.floor(basePollution * userFactor * qualityFactor * moderationFactor));
  }, [stage, params]);

  // Generate dynamic digital post content
  const digitalPostsContent = useMemo(() => {
    const baseCount = stages[stage].digitalPosts;
    const actualCount = Math.floor(baseCount * (params.postingFrequency / 5) * (params.userCount / 100));
    let posts = [];
    
    for (let i = 0; i < actualCount; i++) {
      if (stage === 0) {
        posts.push(`Thoughtful post about ${['nature', 'science', 'art', 'literature', 'philosophy'][Math.floor(Math.random() * 5)]}`);
      } else if (stage === 1) {
        posts.push(i % 7 === 0 ? 
          `Quality discussion on ${['community', 'creativity', 'learning', 'wellbeing', 'connection'][Math.floor(Math.random() * 5)]}` : 
          `User story #${i + 1}`);
      } else if (stage === 2) {
        posts.push(i % 5 === 0 ? 
          "🔥 VIRAL CONTENT! You won't believe what happens next!" : 
          `Standard post #${i + 1}`);
      } else if (stage === 3) {
        posts.push(i % 3 === 0 ? 
          "SHOCKING: Click to see what everyone is talking about!" : 
          `Attention-seeking post #${i + 1}`);
      } else if (stage === 4) {
        posts.push(i % 2 === 0 ? 
          "👆👆👆 MUST SEE NOW! LIKE & SHARE! 👆👆👆" : 
          `Low-quality content #${i + 1}`);
      } else if (stage === 5) {
        posts.push(i % 4 === 0 ? 
          `Quality discussion on ${['rebuilding community', 'digital wellness', 'sustainable engagement', 'meaningful connection'][Math.floor(Math.random() * 4)]}` : 
          `Balanced post #${i + 1}`);
      }
    }
    return posts.slice(0, 50); // Limit for performance
  }, [stage, params]);

  // Calculate effective grass health
  const effectiveGrassHealth = useMemo(() => {
    const baseHealth = stages[stage].grass;
    const attentionFactor = params.attentionSpan / 60;
    const contentQualityFactor = params.contentQualityFocus / 70;
    const frequencyFactor = 5 / params.postingFrequency;
    
    return Math.min(100, Math.max(10, Math.floor(baseHealth * attentionFactor * contentQualityFactor * frequencyFactor)));
  }, [stage, params]);

  return (
    <div className="container">
      {/* Header with stage filter buttons */}
      <div className="header">
        <h1>🐄 Social Media: The Tragedy of the Digital Commons 🖥️</h1>
        <div className="tab-controls">
          <button 
            className={activeTab === 'visualization' ? 'active' : ''} 
            onClick={() => setActiveTab('visualization')}
          >
            Visualization
          </button>
          <button 
            className={activeTab === 'explanation' ? 'active' : ''} 
            onClick={() => setActiveTab('explanation')}
          >
            Detailed Explanation
          </button>
        </div>
        <div className="stage-controls">
          {stages.map((stageObj, i) => (
            <button 
              key={i} 
              onClick={() => setStage(i)}
              className={stage === i ? 'active' : ''}
            >
              {stageObj.name}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'visualization' ? (
        <>
          <div className="visualization-container">
            <div className="split-view">
              {/* Pasture view with grass, cows, and pollution */}
              <div className="pasture-view">
                <svg viewBox="0 0 500 500" className="pasture-svg">
                  {/* Sky */}
                  <rect
                    x="0"
                    y="0"
                    width="500"
                    height="200"
                    fill={`hsl(200, ${100 - effectivePollution}%, ${80 - effectivePollution * 0.3}%)`}
                  />
                  
                  {/* Grass with dynamic color based on health */}
                  <rect
                    x="0"
                    y="200"
                    width="500"
                    height="300"
                    fill={`hsl(${effectiveGrassHealth < 50 ? 30 : 120}, ${
                      effectiveGrassHealth
                    }%, 30%)`}
                  />
                  
                  {/* Sun or clouds based on commons health */}
                  {effectiveGrassHealth > 60 ? (
                    <circle cx="400" cy="80" r="40" fill="#FFD700" />
                  ) : (
                    <>
                      <circle cx="380" cy="70" r="25" fill="#99999955" />
                      <circle cx="410" cy="75" r="30" fill="#77777755" />
                      <circle cx="370" cy="90" r="20" fill="#88888855" />
                    </>
                  )}
                  
                  {/* Grass tufts for healthier commons */}
                  {effectiveGrassHealth > 50 && Array.from({ length: 15 }).map((_, i) => (
                    <path 
                      key={`tuft-${i}`}
                      d={`M${50 + i * 30} 200 Q${55 + i * 30} 180 ${60 + i * 30} 200`}
                      stroke="#4caf50"
                      strokeWidth="3"
                      fill="none"
                    />
                  ))}
                  
                  {/* Animated cows */}
                  <AnimatePresence>
                    {cowPositions.map((pos, i) => (
                      <Cow key={`cow-${i}-${stage}`} pos={pos} delay={i * 0.05} quality={pos.quality} />
                    ))}
                  </AnimatePresence>

                  {/* Pollution particles */}
                  <AnimatePresence>
                    {Array.from({ length: effectivePollution }).map((_, i) => (
                      <motion.text
                        key={`pollution-${i}-${stage}`}
                        x={Math.random() * 500}
                        y={Math.random() * 200}
                        fontSize="20"
                        fill="#FF450066"
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ 
                          y: [null, 100, 0], 
                          opacity: [0, 1, 0],
                          scale: [0.8, 1.2, 0.8]
                        }}
                        transition={{ 
                          repeat: Infinity,
                          duration: 3 + Math.random() * 3,
                          delay: Math.random() * 2
                        }}
                      >
                        {["💥", "🌫️", "⚠️", "📢", "🔺"][Math.floor(Math.random() * 5)]}
                      </motion.text>
                    ))}
                  </AnimatePresence>
                </svg>
              </div>

              {/* Digital Commons view with dynamic posts */}
              <div className="digital-view">
                <div className="feed-container">
                  <AnimatePresence>
                    {digitalPostsContent.map((post, i) => (
                      <DigitalPost 
                        key={`post-${i}-${stage}`} 
                        post={post} 
                        index={i} 
                        stage={stage} 
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Control panel and metrics */}
            <div className="right-panel">
              <Metrics stage={stage} customParams={params} />
              <ControlPanel 
                params={params} 
                setParams={setParams} 
                autoPlay={autoPlay}
                setAutoPlay={setAutoPlay}
              />
            </div>
          </div>

          {/* Explanation Text for the current stage */}
          <div className="analogy-explanations">
            <motion.div 
              key={`explanation-${stage}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h3>{stages[stage].name} Phase</h3>
              <p>{stages[stage].explanation}</p>
              <p>{stages[stage].details}</p>
            </motion.div>
          </div>
        </>
      ) : (
        // Detailed explanation tab
        <div className="detailed-explanation">
          <h2>The Digital Commons: A Tragedy in the Making?</h2>
          
          <section>
            <h3>Freedom to Contribute (Freedom to Breed)</h3>
            <p>In the same way that every herdsman in a commons is free to add more cattle to the pasture, every user on social media is free to post, share, and interact without restraint. Initially, a few posts might enrich the digital space, much like a few cows keep the grass trimmed. But as everyone exercises this freedom to contribute more content, the collective "population" of posts grows exponentially. Just as unchecked breeding eventually leads to overgrazing, an endless stream of content saturates the digital space, overwhelming the user's ability to find meaningful interactions.</p>
          </section>
          
          <section>
            <h3>Individual Rationality Versus Collective Impact</h3>
            <p>Each social media user acts rationally by seeking personal validation—posting engaging content, chasing likes, and curating an online identity. This is akin to each herdsman adding one more cow to maximize personal gain. However, the negative side effects of this behavior—the mental fatigue, distraction, and stress—aren't fully felt by the individual but rather spread across the community. The digital "pasture" becomes cluttered, just as overgrazing depletes a natural pasture, leading to a loss of mental "nutrients" for everyone involved.</p>
          </section>
          
          <section>
            <h3>The Externalities of Overuse (Digital Pollution)</h3>
            <p>Consider pollution in a commons: one herdsman's extra cow contributes to the collective overuse of limited resources, reducing the quality of the pasture for everyone. On social media, each extra piece of attention-grabbing content—often designed to be sensational or provocative—acts as digital pollution. It clutters feeds, contributes to information overload, and disrupts genuine engagement, much like pollutants cloud a once-pristine resource. This "pollution" diminishes users' mental well-being, making it harder for them to focus, relax, or enjoy authentic connections.</p>
          </section>
          
          <section>
            <h3>The Erosion of Quality (Depleting the Commons)</h3>
            <p>In the traditional tragedy of the commons, as more cattle graze, the pasture is overused and eventually fails to regenerate. Similarly, the relentless pursuit of digital validation leads to a deterioration of the quality of social media content. When the focus shifts from meaningful conversation to mindless scrolling and superficial likes, the platform's "grass"—the enriching content that nourishes our minds—becomes scarce. Users may find themselves in a barren mental landscape, feeling drained, anxious, or disconnected.</p>
          </section>
          
          <section>
            <h3>Short-Term Gains vs. Long-Term Sustainability</h3>
            <p>Each user's decision to post more frequently provides short-term rewards in the form of immediate engagement. However, if everyone continues this behavior without restraint, the system as a whole suffers in the long run. Just as a commons eventually collapses when overgrazed, social media platforms can become environments that undermine mental health. The constant pressure to produce and consume content creates a cycle of burnout and anxiety, leaving little room for genuine, restorative experiences.</p>
          </section>
          
          <section>
            <h3>The Need for Mutual Regulation (Coercion for the Common Good)</h3>
            <p>In addressing the tragedy of the commons, Hardin argued for "mutual coercion" to protect shared resources—a kind of agreed-upon regulation to prevent ruin. Similarly, to safeguard mental health, there must be mechanisms on social media platforms that moderate content and encourage quality over quantity. Whether it's through algorithmic tweaks that favor thoughtful content, digital well-being features that limit usage, or even community guidelines that curb the spread of harmful material, such measures act as the regulatory "fences" that prevent the overexploitation of our shared mental space.</p>
          </section>
          
          <section>
            <h3>Reclaiming the Commons for Enrichment</h3>
            <p>Finally, just as sustainable management of a commons requires collective agreement and responsible stewardship, social media needs a cultural shift toward more mindful engagement. When users, platforms, and regulators work together—acknowledging that each post has a cost and that the digital commons is a shared resource—we can begin to restore balance. In doing so, social media can transition from a source of digital overload and mental strain into a space that nurtures creativity, genuine connection, and mental well-being.</p>
          </section>
          
          <div className="return-btn-container">
            <button onClick={() => setActiveTab('visualization')}>Return to Visualization</button>
          </div>
        </div>
      )}
    </div>
  );
};
const styles = `
/* Main Container Styles */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.header {
  text-align: center;
  margin-bottom: 20px;
}

.header h1 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: #2a5885;
}

/* Tab Controls */
.tab-controls {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.tab-controls button {
  padding: 8px 16px;
  margin: 0 5px;
  border: none;
  border-radius: 20px;
  background-color: #e0e0e0;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tab-controls button.active {
  background-color: #2a5885;
  color: white;
}

/* Stage Controls */
.stage-controls {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}

.stage-controls button {
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #f0f0f0;
  cursor: pointer;
  font-size: 0.85rem;
  transition: all 0.2s ease;
}

.stage-controls button.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

/* Visualization Container */
.visualization-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@media (min-width: 768px) {
  .visualization-container {
    flex-direction: row;
  }
}

/* Split View for Pasture and Digital */
.split-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
}

@media (min-width: 768px) {
  .split-view {
    flex-direction: row;
    min-height: 500px;
  }
}

/* Pasture View */
.pasture-view {
  flex: 1;
  background-color: #e9f5db;
  border-radius: 8px;
  overflow: hidden;
}

.pasture-svg {
  width: 100%;
  height: 100%;
  min-height: 300px;
}

/* Digital View */
.digital-view {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f7f7f7;
  border-radius: 8px;
  overflow: hidden;
}

.feed-container {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 400px;
}

/* Post Styles */
.post {
  display: flex;
  padding: 12px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.post:hover {
  transform: translateY(-2px);
}

.post-icon {
  font-size: 1.5rem;
  margin-right: 10px;
  align-self: center;
}

.post-content {
  flex: 1;
}

.post-text {
  margin-bottom: 5px;
  font-size: 0.9rem;
}

.post-reactions {
  font-size: 0.8rem;
  color: #777;
}

/* Special Post Types */
.post.clickbait {
  border-left: 4px solid #ff5722;
  background-color: #fff8f6;
}

.post.quality {
  border-left: 4px solid #4CAF50;
  background-color: #f6fbf6;
}

.post.low-quality {
  border-left: 4px solid #999;
  background-color: #f9f9f9;
  opacity: 0.85;
}

/* Right Panel */
.right-panel {
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Metrics Container */
.metrics-container {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.metrics-container h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #2a5885;
  margin-bottom: 15px;
}

.metrics-grid {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.metric {
  display: flex;
  align-items: center;
}

.metric-label {
  width: 120px;
  font-size: 0.9rem;
  font-weight: 500;
}

.metric-bar-container {
  flex: 1;
  height: 12px;
  background-color: #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  margin: 0 10px;
}

.metric-bar {
  height: 100%;
  border-radius: 6px;
  transition: width 0.5s ease, background-color 0.5s ease;
}

.metric-value {
  width: 40px;
  font-size: 0.85rem;
  text-align: right;
}

/* Control Panel */
.control-panel {
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.control-panel h3 {
  margin-top: 0;
  font-size: 1.1rem;
  color: #2a5885;
  margin-bottom: 15px;
}

.controls-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.control {
  display: flex;
  flex-direction: column;
}

.control label {
  font-size: 0.85rem;
  margin-bottom: 5px;
  font-weight: 500;
}

.slider-container {
  display: flex;
  align-items: center;
}

.slider-container input {
  flex: 1;
  margin-right: 10px;
}

.slider-container .value {
  width: 80px;
  font-size: 0.85rem;
}

/* Simulation Controls */
.simulation-controls {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.simulation-controls button {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #e0e0e0;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.simulation-controls button:hover {
  background-color: #d0d0d0;
}

.auto-play-btn.active {
  background-color: #2a5885;
  color: white;
}

/* Explanation Area */
.analogy-explanations {
  margin-top: 20px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.analogy-explanations h3 {
  margin-top: 0;
  color: #2a5885;
}

/* Detailed Explanation Tab */
.detailed-explanation {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.detailed-explanation h2 {
  color: #2a5885;
  margin-top: 0;
}

.detailed-explanation section {
  margin-bottom: 20px;
}

.detailed-explanation h3 {
  color: #4CAF50;
  margin-bottom: 10px;
}

.detailed-explanation p {
  line-height: 1.6;
}

.return-btn-container {
  text-align: center;
  margin-top: 30px;
}

.return-btn-container button {
  padding: 10px 20px;
  background-color: #2a5885;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.return-btn-container button:hover {
  background-color: #1d3e5f;
}

/* Animation Keyframes */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
}

/* Responsive Adjustments */
@media (max-width: 991px) {
  .visualization-container {
    flex-direction: column;
  }
  
  .right-panel {
    flex: auto;
    width: 100%;
  }
}

@media (max-width: 767px) {
  .stage-controls button {
    font-size: 0.75rem;
    padding: 5px 8px;
  }
  
  .metrics-grid {
    gap: 10px;
  }
  
  .metric {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .metric-label {
    width: 100%;
    margin-bottom: 5px;
  }
  
  .metric-bar-container {
    width: 100%;
    margin: 0 0 5px 0;
  }
  
  .metric-value {
    width: 100%;
    text-align: left;
  }
}
`;

const App = () => (
  <>
    <style>{styles}</style>
    <CommonsVisualization />
  </>
);

export default App;