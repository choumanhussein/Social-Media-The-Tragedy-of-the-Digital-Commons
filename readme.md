# Social Media Commons Simulation

A platform for simulating and analyzing the dynamics of social media platforms as a digital commons, exploring the "tragedy of the commons" phenomenon and potential interventions.

## Overview

This project implements **agent-based models** to simulate how user behaviors, platform dynamics, and network structures affect the health and sustainability of social media platforms. It is based on research that frames social media as a **shared resource (commons)** where individual incentives can lead to platform degradation.

## Features

- **Multiple Agent Types**: Basic users, adaptive agents with social learning, and reinforcement learning agents  
- **Network Models**: Simulate different network topologies (scale-free, small-world, random, complete)  
- **Intervention Testing**: Evaluate moderation, education, algorithm changes, and counter-campaigns  
- **Advanced Visualizations**: Generate static plots and interactive visualizations  
- **Comprehensive Experiments**: Run predefined experiments to test various hypotheses  

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/social-media-commons.git
cd social-media-commons

# Create a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## Usage

The project provides a unified entry point through `main.py` that supports different experiments:

```bash
# Run a basic simulation
python main.py --experiment basic --agents 1000 --steps 1000

# Compare different interventions
python main.py --experiment interventions --agents 1000 --steps 1000 --intervention_step 200

# Test different network structures
python main.py --experiment network --agents 100 --steps 150 --network_type scale_free

# Generate an HTML report
python main.py --experiment all --agents 500 --steps 500 --generate_report
```

## Experiment Types

- `basic`: Run a simple simulation to demonstrate the tragedy of commons  
- `interventions`: Compare different intervention strategies  
- `rl`: Compare standard agents to reinforcement learning agents  
- `early_interventions`: Test early intervention strategies  
- `combined_interventions`: Test combinations of interventions  
- `rl_tuning`: Optimize reinforcement learning parameters  
- `network`: Test different network structures  
- `network_visualization`: Generate visualizations of network structures  
- `sensitivity`: Run sensitivity analysis on model parameters  
- `social_optimum`: Compare social optimum to tragedy of commons  
- `enhanced_intervention`: Test an enhanced intervention package  
- `all`: Run all experiment types  

## Project Structure

```
social-media-commons/
├── agents/                  # Agent implementations
│   ├── basic_agent.py       # Simple user agent
│   ├── adaptive_agent.py    # Agent with adaptive behavior
│   └── rl_agent.py          # Reinforcement learning agent
├── experiments/             # Experiment implementations
│   ├── basic_simulation.py
│   ├── intervention_comparison.py
│   └── ...
├── models/                  # Model implementations
│   ├── base_model.py        # Abstract base class
│   ├── standard_model.py    # Standard commons model
│   ├── network_model.py     # Network-aware model
│   └── rl_model.py          # Reinforcement learning model
├── network/                 # Network generation utilities
├── visualization/           # Visualization utilities
├── utils/                   # Utility functions
├── validation/              # Model validation code
├── config/                  # Configuration files
├── main.py                  # Unified entry point
└── README.md
```

## Mathematical Model

The model is based on a set of **differential equations** that describe the dynamics of social media platforms.  
For a detailed explanation, see the **Mathematical Model** document.

### Key Components

- **Platform Health Function** `S(M)`: The core metric representing platform health  
- **Content Quality** `Q`: Ratio of high-quality to total content  
- **Engagement** `E`: User engagement level  
- **Trust** `T`: Community trust in the platform  
- **User Base** `U`: User sustainability  

## Advanced Features

- **Epidemiological Information Diffusion**: Model misinformation spread using SIR-inspired dynamics  
- **Replicator Dynamics**: Apply evolutionary game theory to model strategy evolution  
- **Network Effects**: Analyze how network structure impacts content diffusion and platform health  
- **Tragedy Gap Analysis**: Quantify the difference between Nash equilibrium and social optimum  

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project implements models inspired by research on **digital commons**, **social media dynamics**, and **agent-based modeling**.
