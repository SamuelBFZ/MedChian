# MedChain Blockchain

## Project Overview
MedChain is a decentralized application designed to securely store and manage medical information using blockchain technology. This project leverages Go for backend development and Solidity for smart contracts.

## Technical Specifications

### 1. **Backend**
- **Language**: Go (Golang)
- **Version**: Go 1.24.2
- **Directory**: `blockchain/`
- **Module Name**: `blockchain`

### 2. **Smart Contracts**
- **Language**: Solidity
- **Version**: ^0.8.28
- **Directory**: `backend/contracts/`
- **Compiler**: Hardhat or solc

### 3. **Frontend**
- **Framework**: React.js
- **Directory**: `app-med-chain/`

### 4. **Data Models**
The project uses the following data models:
- **Usuario**: Stores user information.
- **RegistroMedico**: Stores medical records.
- **ResultadoDeExamen**: Stores test results.

### 5. **Blockchain**
- **Consensus Mechanism**: Proof of Concept (PoC)
- **Smart Contract**: `Lock.sol` (Handles time-locked funds and ownership)

### 6. **Dependencies**
- **Go Modules**: Managed via `go.mod`
- **Solidity Tools**: Hardhat, Solhint, Prettier
- **Frontend Tools**: React, TailwindCSS

