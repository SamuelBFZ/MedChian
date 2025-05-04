// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20; // O la versión de Solidity que use Hardhat

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; // Para control de acceso simple

contract MedicalRecordNFT is ERC721, Ownable {

    // Mapeo para almacenar la referencia off-chain para cada token ID
    mapping(uint256 => string) private _dataReferences;

    // Evento para notificar cuando se actualiza la referencia de datos
    event DataReferenceUpdated(uint256 tokenId, string newDataReference);

    // Constructor: Nombra tu colección de NFTs
    constructor() ERC721("MedicalRecord", "MEDREC") Ownable(msg.sender) {
        // El desplegador del contrato será el propietario inicial (puede ser tu admin)
    }

    // Función para crear un nuevo token (solo el propietario/admin puede mintear)
    // @param to: Dirección del paciente que recibirá el token
    // @param tokenId: ID único para este token (podrías usar un contador en el backend)
    // @param initialDataReference: La referencia inicial a los datos off-chain
    function mint(address to, uint256 tokenId, string memory initialDataReference) public onlyOwner {
        _safeMint(to, tokenId);
        _dataReferences[tokenId] = initialDataReference;
        // Podrías emitir un evento para la creación también si es necesario
    }

    // Función para actualizar la referencia de datos off-chain para un token
    // Solo usuarios autorizados (médicos) deberían poder llamar a esto.
    // Por ahora, usaremos 'onlyOwner' (el admin/desplegador del contrato),
    // pero esto DEBE cambiarse a un mecanismo de roles más robusto (ej. roles de OpenZeppelin, o lista blanca de médicos)
    // en una versión un poco más avanzada.
    function updateDataReference(uint256 tokenId, string memory newDataReference) public onlyOwner {
        // Opcional: Verificar si el token existe (el onlyOwner ya implica que tiene control)
        // require(_exists[tokenId], "Token does not exist");

        _dataReferences[tokenId] = newDataReference;
        emit DataReferenceUpdated(tokenId, newDataReference);
    }

    // Función para obtener la referencia de datos para un token
    // Cualquiera puede llamar a esta función, la restricción de acceso a los DATOS REALES
    // ocurre en el backend después de obtener la referencia.
    function getDataReference(uint256 tokenId) public view returns (string memory) {
        return _dataReferences[tokenId];
    }

    // Sobrescribir base URI si es necesario para metadatos estándar (opcional para MVP)
    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs://YOUR_METADATA_CID/"; // Ejemplo con IPFS
    // }

    // La función tokenURI ya viene de ERC721 y usará _dataReferences si configuras _baseURI o si sobrescribes tokenURI
    // Para este MVP, getDataReference es suficiente para obtener el link a tus datos.
}