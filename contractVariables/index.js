module.exports = {
    contractABI: [
        {
            "constant": false,
            "inputs": [
                {
                    "name": "myid",
                    "type": "bytes32"
                },
                {
                    "name": "result",
                    "type": "string"
                }
            ],
            "name": "__callback",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "myid",
                    "type": "bytes32"
                },
                {
                    "name": "result",
                    "type": "string"
                },
                {
                    "name": "proof",
                    "type": "bytes"
                }
            ],
            "name": "__callback",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "addMatch",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_onRadiant",
                    "type": "bool"
                }
            ],
            "name": "bet",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "changeRole",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "endMatch",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchIdString",
                    "type": "string"
                },
                {
                    "name": "_matchIdUint",
                    "type": "uint256"
                }
            ],
            "name": "getMatchWinner",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "getRemainingPricePool",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipRenounced",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "log",
                    "type": "string"
                }
            ],
            "name": "LogNewOraclizeQuery",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": true,
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "OwnershipTransferred",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_onRadiant",
                    "type": "bool"
                },
                {
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "refund",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "renounceOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "startMatch",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "newOwner",
                    "type": "address"
                }
            ],
            "name": "transferOwnership",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                },
                {
                    "name": "_amountWithdraw",
                    "type": "uint256"
                },
                {
                    "name": "_address",
                    "type": "address"
                }
            ],
            "name": "withdrawWinnings",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "addressIsAdmin",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "getOwnBets",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "_matchId",
                    "type": "uint256"
                }
            ],
            "name": "getTeamBets",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                },
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "isOwner",
            "outputs": [
                {
                    "name": "",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "matches",
            "outputs": [
                {
                    "name": "matchId",
                    "type": "uint256"
                },
                {
                    "name": "poolPrice",
                    "type": "uint256"
                },
                {
                    "name": "radiantBets",
                    "type": "uint256"
                },
                {
                    "name": "direBets",
                    "type": "uint256"
                },
                {
                    "name": "radiantWin",
                    "type": "bool"
                },
                {
                    "name": "direWin",
                    "type": "bool"
                },
                {
                    "name": "withdrawable",
                    "type": "bool"
                },
                {
                    "name": "bettable",
                    "type": "bool"
                },
                {
                    "name": "refundable",
                    "type": "bool"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "matchesNumber",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "matchIdToId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "owner",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "selectedMatchId",
            "outputs": [
                {
                    "name": "",
                    "type": "uint256"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ],
    contractBytecode: "6080604052336000806101000a815481600160a060020a030219169083600160a060020a0316021790555060016006600033600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff02191690831515021790555061267f806100776000396000f30060806040526004361061010e5763ffffffff60e060020a6000350416630eaa85328114610113578063123886261461012d57806313ca2074146101585780631b30ca291461017a57806327dc297e146101aa57806331e0c5331461021a57806338bbfa50146102325780634768d4ef146102e057806353088b941461035a5780635b82853214610372578063715018a6146103c957806387c0b8e6146103de5780638da5cb5b146103fe5780638f32d59b1461043b5780639a6d3aaa14610467578063a305d7191461047a578063b5c4b23d1461049b578063bf725a84146104bc578063cdd0f1d0146104d4578063ec781f0f146104e9578063f2fde38b146104fe578063f6c4d9651461051f575b600080fd5b34801561011f57600080fd5b5061012b60043561052a565b005b34801561013957600080fd5b506101456004356105c4565b6040805191825251602090910181900390f35b61012b6004803590602090810180351515910135600160a060020a03166105d6565b34801561018657600080fd5b50610192600435610786565b60408051928352602092830191825251910181900390f35b3480156101b657600080fd5b5061012b6004803603810190808035600019169060200190929190803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437509497506107d19650505050505050565b34801561022657600080fd5b50610192600435610a4f565b34801561023e57600080fd5b5061012b6004803603810190808035600019169060200190929190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284375050604080516020601f89358b018035918201839004830283018401909452808352979a999881019791965091820194509250829150840183828082843750949750610ae09650505050505050565b3480156102ec57600080fd5b506102f8600435610ae5565b604051808a81526020018981526020018881526020018781526020018615151515815260200185151515158152602001841515151581526020018315151515815260200182151515158152602001995050505050505050505060405180910390f35b34801561036657600080fd5b5061012b600435610b56565b61012b600480360381019080803590602001908201803590602001908080601f016020809104026020016040519081016040528093929190818152602001838380828437509497505093359450610cca9350505050565b3480156103d557600080fd5b5061012b610f2a565b61012b600480359060209081018035910135600160a060020a0316610fb0565b34801561040a57600080fd5b5061041361122b565b6040518082600160a060020a0316600160a060020a0316815260200191505060405180910390f35b34801561044757600080fd5b50610450611245565b604080519115151515825251602090910181900390f35b61012b6004803590602001351515611275565b34801561048657600080fd5b5061012b600160a060020a03600435166114f9565b3480156104a757600080fd5b50610450600160a060020a036004351661158b565b3480156104c857600080fd5b5061012b6004356115ab565b3480156104e057600080fd5b50610145611662565b3480156104f557600080fd5b50610145611668565b34801561050a57600080fd5b5061012b600160a060020a036004351661166e565b61012b60043561168d565b60006006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561057157600080fd5b6008600760008481526020019081526020016000205481548110151561059357fe5b9060005260206000209060090201905060018160040160026101000a81548160ff0219169083151502179055505050565b60076020526000908152604090205481565b60008084836000600860076000858152602001908152602001600020548154811015156105ff57fe5b9060005260206000209060090201905080600701600083600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561065657600080fd5b6008600760008a81526020019081526020016000205481548110151561067857fe5b9060005260206000209060090201945086156106cd57600160a060020a038087161660008181526005870160208083018281529081018084205460028b01805482900390559484529190528120559350610708565b600160a060020a038087161660008181526006870160208083018281529081018084205460038b018054829003905594845291905281205593505b600160a060020a038087169081166000908152600787016020808301918252018120805482151561010084900a90810260ff90910219909116179055600187018054879003905560405186156108fc02918791908180800381858888f1935050505015801561077b573d6000803e3d6000fd5b505050505050505050565b6000806000600860076000868152602001908152602001600020548154811015156107ad57fe5b90600052602060002090600902019050806002015481600301549250925050915091565b60006107db611743565b600160a060020a031633600160a060020a03161415156107fa57600080fd5b604051600080820182900382208451911916918491819060208401908083835b602083101515610839578051825260209283900392918201910161081a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415151561087757600080fd5b60086007600060095481526020019081526020016000205481548110151561089b57fe5b9060005260206000209060090201905060405180807f52616469616e74000000000000000000000000000000000000000000000000008152506007019050604051809103902060001916826040518082805190602001908083835b60208310151561091557805182526020928390039291820191016108f6565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902060001916141561096e5760018160040160006101000a81548160ff021916908315150217905550610a2d565b60405180807f44697265000000000000000000000000000000000000000000000000000000008152506004019050604051809103902060001916826040518082805190602001908083835b6020831015156109d857805182526020928390039291820191016109b9565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600019161415610a2d5760018160040160016101000a81548160ff0219169083151502179055505b60018160040160026101000a81548160ff021916908315150217905550505050565b600080600060086007600086815260200190815260200160002054815481101515610a7657fe5b9060005260206000209060090201905080600501600033600160a060020a0316600160a060020a031681526020019081526020016000205481600601600033600160a060020a0316600160a060020a03168152602001908152602001600020549250925050915091565b505050565b600881815481101515610af457fe5b6000918252602082206009909102018082015460018083015460028085015460038087015460049788015496995093979196939560ff61010093840a8204811696840a820481169594840a820481169492840a82048116939290920a90041689565b610b5e612564565b60008260076000828152602001908152602001600020546000141515610b8357600080fd5b6006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff16151560011515141515610bc857600080fd5b505060008082018381526001801515151560e0850181815261010080870192835260088054850180825590875260208088209651600992879003928302909701808901979097558089015187870155604089015160028089019190915560608a01516003808a019190915560808b01516004998a01805460a08e015160c0909e01519851995115159b880a9b8c0260ff9c8d02199a151594890a948502948d021999151595890a958602958d02199e15159b890a9b8c029b8d0219931515988e900a9889029c90980219169a909a1716979097179990991698909817929092169390931791909116919091179091559281526007828201908152909101902055565b60608030600160a060020a031631610d166040805190810160405280600381526020017f55524c0000000000000000000000000000000000000000000000000000000000815250611966565b1115610d8657604080517f08c379a00000000000000000000000000000000000000000000000000000000081526004016020808201828103909252601282527f4e6f7420656e6f7567682062616c616e636500000000000000000000000000009181019182529151910181900390fd5b7f621c2856e3b87f81235f8ac8a22bbb40a0142961960710d00b2b6c380902b57e6040518080602001828103825260358152602001807f4f7261636c697a65207175657279207761732073656e742c207374616e64696e81526020017f6720627920666f722074686520616e737765722e2e000000000000000000000081525060400191505060405180910390a1610e91610e2085611bf7565b610e85606060405190810160405280603a81526020017f6a736f6e2868747470733a2f2f626f756e74792d72756e652d6272696467652e81526020017f6865726f6b756170702e636f6d2f726573756c742f646f74612f000000000000815250611bf7565b9063ffffffff611c1d16565b9150610edd610ed46040805190810160405280600881526020017f292e77696e6e6572000000000000000000000000000000000000000000000000815250611bf7565b610e8584611bf7565b600984905560408051808201909152600381527f55524c00000000000000000000000000000000000000000000000000000000006020820152909150610f239082611c97565b5050505050565b610f32611245565b1515610f3d57600080fd5b6000809054906101000a9004600160a060020a0316600160a060020a03167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a815481600160a060020a030219169083600160a060020a03160217905550565b60008382600060086007600085815260200190815260200160002054815481101515610fd857fe5b9060005260206000209060090201905080600801600083600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156000151514151561102f57600080fd5b868560006008600760008581526020019081526020016000205481548110151561105557fe5b9060005260206000209060090201905080600701600083600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff161515600115151415156110ac57600080fd5b6008600760008c8152602001908152602001600020548154811015156110ce57fe5b906000526020600020906009020196508660040160009054906101000a900460ff16151560011515148061111757508660040160019054906101000a900460ff16151560011515145b151561112257600080fd5b888760050160008a600160a060020a0316600160a060020a031681526020019081526020016000205410158061117f5750888760060160008a600160a060020a0316600160a060020a031681526020019081526020016000205410155b8061118e575088876001015410155b151561119957600080fd5b600187600801600033600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff02191690831515021790555087600160a060020a03166108fc8a9081150290604051600060405180830381858888f19350505050158015611212573d6000803e3d6000fd5b5050506001909401805496909603909555505050505050565b60008054600160a060020a036101009290920a9004165b90565b60008060009054906101000a9004600160a060020a0316600160a060020a031633600160a060020a031614905090565b600082611280612564565b600860076000848152602001908152602001600020548154811015156112a257fe5b6000918252602080832060408051610120810190915260099093020180840154835260018082015484840190815260028084015491850191825260038085015492860192835260049485015460ff610100998a0a8204811615151515948801948552858a0a820481161515151594880194855292890a810483161515151593870193845290880a81048216151515159286019283529390960a9092049094161515151591015260e081015190925090151590151514151561136257600080fd5b80610100015115156001151514151561137a57600080fd5b84336000600860076000858152602001908152602001600020548154811015156113a057fe5b9060005260206000209060090201905080600701600083600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff161515600015151415156113f757600080fd5b6008600760008a81526020019081526020016000205481548110151561141957fe5b90600052602060002090600902019550861561146857600160a060020a03338116166000908152600587016020808301918252019020805434908101909155600287018054909101905561149d565b600160a060020a0333811616600090815260068701602080830191825201902080543490810190915560038701805490910190555b348660010160008282540192505081905550600186600701600033600160a060020a0316600160a060020a0316815260200190815260200160002060006101000a81548160ff0219169083151502179055505050505050505050565b6006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff1615156001151514151561153e57600080fd5b600160a060020a0390811616600081815260066020808301828152908101808420549484529190528120805460ff6101009390930a93849004831615151584029290930219909216179055565b60066020528060005260406000206000915054906101000a900460ff1681565b60006006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff161515600115151415156115f257600080fd5b6008600760008481526020019081526020016000205481548110151561161457fe5b9060005260206000209060090201905060008160040160036101000a81548160ff02191690831515021790555060008160040160046101000a81548160ff0219169083151502179055505050565b60095481565b60085490565b611676611245565b151561168157600080fd5b61168a816120af565b50565b60006006600033600160a060020a0316600160a060020a0316815260200190815260200160002060009054906101000a900460ff161515600115151415156116d457600080fd5b600860076000848152602001908152602001600020548154811015156116f657fe5b9060005260206000209060090201905033600160a060020a03166108fc82600101549081150290604051600060405180830381858888f19350505050158015610ae0573d6000803e3d6000fd5b6000600160009054906101000a9004600160a060020a0316600160a060020a03166000148061178f575061178b600160009054906101000a9004600160a060020a031661214e565b6000145b156117a05761179e6000612152565b505b600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b1580156117f357600080fd5b505af1158015611807573d6000803e3d6000fd5b505050506040513d602081101561181d57600080fd5b505160025460006101000a9004600160a060020a03908116811691161415156118e257600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561189357600080fd5b505af11580156118a7573d6000803e3d6000fd5b505050506040513d60208110156118bd57600080fd5b505160028054600160a060020a0392831660006101000a908102930219169190911790555b600260009054906101000a9004600160a060020a0316600160a060020a031663c281d19e6040518163ffffffff1660e060020a028152600401602060405180830381600087803b15801561193557600080fd5b505af1158015611949573d6000803e3d6000fd5b505050506040513d602081101561195f57600080fd5b5051905090565b6000600160009054906101000a9004600160a060020a0316600160a060020a0316600014806119b257506119ae600160009054906101000a9004600160a060020a031661214e565b6000145b156119c3576119c16000612152565b505b600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611a1657600080fd5b505af1158015611a2a573d6000803e3d6000fd5b505050506040513d6020811015611a4057600080fd5b505160025460006101000a9004600160a060020a0390811681169116141515611b0557600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611ab657600080fd5b505af1158015611aca573d6000803e3d6000fd5b505050506040513d6020811015611ae057600080fd5b505160028054600160a060020a0392831660006101000a908102930219169190911790555b600260009054906101000a9004600160a060020a0316600160a060020a031663524f3889836040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611b79578181015183820152602001611b61565b50505050905090810190601f168015611ba65780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015611bc557600080fd5b505af1158015611bd9573d6000803e3d6000fd5b505050506040513d6020811015611bef57600080fd5b505192915050565b611bff6125a4565b50604080518082019091528151815260209182019181019190915290565b606080600083600001518560000151016040519080825280601f01601f191660200182016040528015611c5a578160200160208202803883390190505b509150602082019050611c768186602001518760000151612162565b611c8f8560000151820185602001518660000151612162565b509392505050565b600080600160009054906101000a9004600160a060020a0316600160a060020a031660001480611ce45750611ce0600160009054906101000a9004600160a060020a031661214e565b6000145b15611cf557611cf36000612152565b505b600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611d4857600080fd5b505af1158015611d5c573d6000803e3d6000fd5b505050506040513d6020811015611d7257600080fd5b505160025460006101000a9004600160a060020a0390811681169116141515611e3757600160009054906101000a9004600160a060020a0316600160a060020a03166338cc48316040518163ffffffff1660e060020a028152600401602060405180830381600087803b158015611de857600080fd5b505af1158015611dfc573d6000803e3d6000fd5b505050506040513d6020811015611e1257600080fd5b505160028054600160a060020a0392831660006101000a908102930219169190911790555b600260009054906101000a9004600160a060020a0316600160a060020a031663524f3889856040518263ffffffff1660e060020a0281526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611eab578181015183820152602001611e93565b50505050905090810190601f168015611ed85780820380516001836020036101000a031916815260200191505b5092505050602060405180830381600087803b158015611ef757600080fd5b505af1158015611f0b573d6000803e3d6000fd5b505050506040513d6020811015611f2157600080fd5b50519050670de0b6b3a764000062030d403a0201811115611f4857600060010291506120a8565b600260009054906101000a9004600160a060020a0316600160a060020a031663adf59f9982600087876040518563ffffffff1660e060020a028152600401808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611fca578181015183820152602001611fb2565b50505050905090810190601f168015611ff75780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561202a578181015183820152602001612012565b50505050905090810190601f1680156120575780820380516001836020036101000a031916815260200191505b50955050505050506020604051808303818588803b15801561207857600080fd5b505af115801561208c573d6000803e3d6000fd5b50505050506040513d60208110156120a357600080fd5b505191505b5092915050565b6000600160a060020a031681600160a060020a0316141515156120d157600080fd5b80600160a060020a03166000809054906101000a9004600160a060020a0316600160a060020a03167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a815481600160a060020a030219169083600160a060020a0316021790555050565b3b90565b600061215c6121a6565b92915050565b60005b60208210151561218657825184526020938401939283019290910390612165565b509051825160016020939093036101000a92909203918216911916179052565b6000806121c6731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed61214e565b111561224d57731d3b2638a7cc9f2cb3d298a3da7a90b67e5506ed600160006101000a815481600160a060020a030219169083600160a060020a031602179055506122456040805190810160405280600b81526020017f6574685f6d61696e6e657400000000000000000000000000000000000000000081525061254d565b506001611242565b600061226c73c03a2615d5efaf5f49f60b7bb6583eaec212fdf161214e565b11156122eb5773c03a2615d5efaf5f49f60b7bb6583eaec212fdf1600160006101000a815481600160a060020a030219169083600160a060020a031602179055506122456040805190810160405280600c81526020017f6574685f726f707374656e33000000000000000000000000000000000000000081525061254d565b600061230a73b7a07bcf2ba2f2703b24c0691b5278999c59ac7e61214e565b11156123895773b7a07bcf2ba2f2703b24c0691b5278999c59ac7e600160006101000a815481600160a060020a030219169083600160a060020a031602179055506122456040805190810160405280600981526020017f6574685f6b6f76616e000000000000000000000000000000000000000000000081525061254d565b60006123a873146500cfd35b22e4a392fe0adc06de1a1368ed4861214e565b11156124275773146500cfd35b22e4a392fe0adc06de1a1368ed48600160006101000a815481600160a060020a030219169083600160a060020a031602179055506122456040805190810160405280600b81526020017f6574685f72696e6b65627900000000000000000000000000000000000000000081525061254d565b6000612446736f485c8bf6fc43ea212e93bbf8ce046c7f1cb47561214e565b1115612487575060018054600160a060020a03736f485c8bf6fc43ea212e93bbf8ce046c7f1cb475811660006101000a908102910219909116178155611242565b60006124a67320e12a1f859b3feae5fb2a0a32c18f5a65555bbf61214e565b11156124e7575060018054600160a060020a037320e12a1f859b3feae5fb2a0a32c18f5a65555bbf811660006101000a908102910219909116178155611242565b60006125067351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa61214e565b1115612547575060018054600160a060020a037351efaf4c8b3c9afbd5ab9f4bbc82784ab6ef8faa811660006101000a908102910219909116178155611242565b50600090565b80516125609060039060208401906125bb565b5050565b6040805161012081019091526000808252602080830182815281018281528101828152911515918101828152810182815281018281528101828152015290565b604080518082019091526000808252602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106125fc57805160ff1916838001178555612629565b82800160010185558215612629579182015b8281111561262957825182559160200191906001019061260e565b50612635929150612639565b5090565b61124291905b80821115612635576000815560010161263f5600a165627a7a723058207ca42f068e88eb94cdce5d3dbecae1b89d34f88ea78826465708f2836680d60b0029",
    contractAddress: "0x1b13d9bbd9afc9735338110c213befbfc740341c",
    ropstenProvider: "https://ropsten.infura.io/v3/559285613abd4d2dac598ba388a26a70"
};