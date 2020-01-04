
# Burdigalax RP - Inventory 

## Quick installation GUI

DOWNLOAD Burdigalax Packages to install on your ONSET server. 

[![Download](../../../download.svg "Download") Download Burdigalax package GUI. v4.3.0](https://github.com//Burdigalax/BurdigalaxGUI/raw/master/ONSET_SERVER.4.3.0.zip)


### Integration - Exemple for Onset : 

https://github.com/Burdigalax/BurdigalaxRP-Onset

**Warning :** This repo is exemple of usage IHM. This code missing server implementation with database.

### Presentation

[![Vidéo de présentation](https://img.youtube.com/vi/Rdj-Fb5cTSQ/0.jpg)](https://www.youtube.com/watch?v=Rdj-Fb5cTSQ)

### Live Demo

Full readme and live demo of exemple usage inventory module on : http://rom444.free.fr/BurdigalaxRP/ 

### API

- List of functions called : 
```
 BURDIGALAX_inventory_onClose
BURDIGALAX_inventory_onEquip
BURDIGALAX_inventory_onUse
BURDIGALAX_inventory_onDelete
BURDIGALAX_inventory_onTransfer
BURDIGALAX_inventory_onChangeNearbyInventorySelected
```

- List of callable functions : 
```
 BURDIGALAX_inventory.setConfig(JSON);
 BURDIGALAX_inventory.updateItemsInventories(inventoryId, items);
 BURDIGALAX_inventory.updateInventories(inventories);
 BURDIGALAX_inventory.updateItems(items);
  
```
##### onClose :

Receive one parameter : it's context of inventory.  
2 values possibles : `main` or `transfer`

If context egal main i recommand to close GUI. Else you can updateInventory of the mainInventory for reset selectedNearbyInventoryId.  
This will close the transfer inventory.  

_Exemple:_ 

```js
  BURDIGALAX_inventory.updateInventory(mainInventoryId, { selectedNearbyInventoryId: null})
```

##### onUse :

Object receive for these events :

<details>
    <summary>SHOW / HIDE JSON</summary>

```json
{
  "idInventory": 1,
  "idItem": 8,
  "newQuantity": 0
}
```
</details>

I recommend  not use the newQuantity field.  
:warning: **WARNING** : You must recalculate the new quantity on the server side for security /!\ 

##### onEquip :

Object receive for these events :

<details>
    <summary>SHOW / HIDE JSON</summary>

```json
{
  "idInventory": 1,
  "idItem": 8,
  "isEquipped": false
}
```
</details>


##### onDelete :

Object receive for these events :

<details>
    <summary>SHOW / HIDE JSON</summary>

```json
{
  "idInventory": 1,
  "idItem": 3,
  "quantity": 1,
  "newQuantity": 1,
}
```
</details>

I recommend  not use the newQuantity field.  
:warning: **WARNING** : You must recalculate the new quantity on the server side for security /!\ 


##### onTransfer :

Object receive for these events :

<details>
    <summary>SHOW / HIDE JSON</summary>

```json
{
    "originInventoryId": 1,
    "destinationInventoryId": 26,
    "idItem": 6,
    "quantity": 5,
    "newQuantityOrigin": 0,
    "newQuantityDestination": 5
}
```
</details>

I recommend  not use the newQuantityOrigin and newQuantityDestination fields.  
:warning: **WARNING** : You must recalculate the new quantity on the server side for security /!\ 

------

#### setConfig

Send config for show IHM :  
`BURDIGALAX_inventory.setConfig(JSON);`

:information_source: **INFORMATION**: 
- For `iconUrl` use the DataURI format to limit the import of files on your `package.json` server.
- You can sort your articles by Category with the field `categoryName`, but it's not mandatory.
- _You can add custom Articles and Effects_

The configuration you send will be merged with the default configuration :
- Default config : 

<details>
    <summary>SHOW / HIDE JSON</summary>
    
```
{
  config: {
    hasEquipableCategory: true,
    iconUrlAllCategory:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Ctitle%3Eicon-filter-all%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg fill='%23000' fill-rule='nonzero'%3E%3Cpath d='M0 0h6.4v6.4h-6.4zM0 9.601h6.4v6.399h-6.4zM9.599 9.601h6.401v6.399h-6.401zM9.599 0h6.401v6.399h-6.401z'/%3E%3C/g%3E%3C/svg%3E",
    iconUrlEquipableCategory:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Ctitle%3Eicon-filter-equip%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M8 0c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 2c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 2c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4z' fill='%23000'/%3E%3C/svg%3E",
    wording: {
      emptyInventory: "L'inventaire est vide !",
      nameAllCategory: "Tous les objets",
      nameEquipableCategory: "Equipement",
      total: "Total",
      use: "Utiliser",
      selectItem: "Sélectionner un item",
      equipped: "Equipé",
      max: "MAX",
      noneInventory: "Aucun inventaire"
    }
  }
}
```
</details>

- List of all OTHERS parameters :

<details>
    <summary>SHOW / HIDE JSON</summary>

```
{
  mainInventoryId: 1,
  items: [
    {
      id: 1,
      name: "Donut",
      categoryId: 1,
      description: "",
      health: 45,  // set to null if you don't use property of this item.
      imageUrl: null, // for description on selected item but if null i use iconUrl field
      isEquipable: false,
      isDeletable: true,
      isUsable: true,
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-donut@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M11.995.002c6.623 0 11.992 5.368 11.992 11.992 0 6.623-5.368 11.992-11.992 11.992-6.624 0-11.992-5.368-11.992-11.992 0-6.623 5.369-11.992 11.992-11.992zm-8.951 17.367c.755-.676 2.163-1.52 3.718-.369 1.362 1.009 1.447.862 1.547.688 1.181-2.048 2.875-1.109 4.124.225 1.929 2.062 2.732 1.821 4.176-.945 1.982-3.795 3.805-1.875 4.739-.335.695-1.398 1.086-2.973 1.086-4.639 0-5.766-4.674-10.44-10.44-10.44-5.766 0-10.44 4.674-10.44 10.44 0 1.966.544 3.805 1.489 5.375zm17.37.798c-.379-.771-1.409-2.447-2.434-.483-1.98 3.791-3.931 4.218-6.674 1.285-.385-.411-1.161-1.371-1.657-.51-.572.99-1.054 1.826-3.809-.215-.762-.565-1.526.02-1.897.396 1.915 2.317 4.811 3.794 8.052 3.794 3.456 0 6.519-1.68 8.419-4.267zm-1.025-4.179c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm-8.148-8.328c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm-5.545 4.997c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm8.568-4.488c-1.011-.105-.852-1.644.159-1.54l1.153.121c1.011.104.852 1.644-.159 1.539l-1.153-.12zm3.882 2.555c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm-13.884 5.507c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm1.609-8.489c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm6.124 2.075c2.303 0 4.177 1.874 4.177 4.177 0 2.306-1.873 4.177-4.177 4.177-2.307 0-4.177-1.87-4.177-4.177 0-2.304 1.873-4.177 4.177-4.177zm0 1.552c-1.45 0-2.625 1.175-2.625 2.625s1.175 2.625 2.625 2.625c1.451 0 2.625-1.173 2.625-2.625 0-1.453-1.172-2.625-2.625-2.625z' fill='%23D48CD2' fill-rule='nonzero'/%3E%3C/svg%3E",
      weight: 0.5,
      effects: [
        {
          id: "food",
          value: 3
        },
        {
          id: "hydration",
          value: -5
        }
      ]
    },
  ],
  effects: {
    hydration: {
      name: "Hydratation",
      unit: "%",
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eeffet-hydrat@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg transform='translate(1 1)' fill='none'%3E%3Cg fill='%236ABEE4' fill-rule='nonzero'%3E%3Cpath d='M12.963 22c-3.828 0-6.943-3.114-6.943-6.943 0-3.579 5.711-10.915 6.363-11.741.14-.177.354-.281.58-.281.226 0 .44.103.58.281.651.825 6.363 8.16 6.363 11.741 0 3.828-3.114 6.943-6.942 6.943zm0-17.013c-1.933 2.564-5.465 7.733-5.465 10.07 0 3.013 2.451 5.464 5.465 5.464 3.013 0 5.465-2.451 5.465-5.464 0-2.337-3.532-7.506-5.465-10.07z'/%3E%3Cpath d='M12.963 19.045c-.389-.026-.691-.349-.691-.739s.302-.713.691-.739c1.385-.001 2.507-1.124 2.509-2.509.026-.389.349-.691.739-.691s.713.302.739.691c-.003 2.201-1.787 3.984-3.987 3.987z'/%3E%3C/g%3E%3Ccircle stroke='%236ABEE4' stroke-width='2' cx='13' cy='13' r='13'/%3E%3C/g%3E%3C/svg%3E"
    },
    food: {
      name: "Alimentation",
      iconUrl:
        "data:image/svg+xml,%0A%3Csvg width='28' height='28' viewBox='0 0 28 28' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eeffet-food@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg transform='translate(1 1)' fill='none'%3E%3Cg fill='%237F95A5' fill-rule='nonzero'%3E%3Cpath d='M17.351 5.092c-.479 0-.912.193-1.286.574-1.838 1.87-1.786 8.214-1.774 8.931l.009.52h2.523v6.296c0 .292.236.528.528.528.292 0 .528-.237.528-.528v-15.792c0-.292-.236-.528-.528-.528zM12.317 9.929h-.71v-4.87h-.698v4.87h-.71v-4.87h-.698v4.87h-.71v-4.87h-.633v4.864c0 1.119.769 2.057 1.806 2.32l-.508 9.01c0 .38.789.688 1.097.688.309 0 1.097-.308 1.097-.688l-.508-9.01c1.037-.263 1.806-1.2 1.806-2.32v-4.864h-.633v4.87h.001z'/%3E%3C/g%3E%3Ccircle stroke='%237F95A5' stroke-width='2' cx='13' cy='13' r='13'/%3E%3C/g%3E%3C/svg%3E",
      unit: "%"
    },
  },
  categories: [
    {
      id: 1,
      name: "Consommables",
      iconUrl:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='16' viewBox='0 0 12 16'%3E%3Ctitle%3Eicon-filter-food%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M4.347 7.042l-.928.56.708 6.65c.048.605-.248 1.185-.765 1.502-.517.317-1.169.317-1.686 0-.517-.317-.813-.898-.765-1.502l.708-6.65-.928-.56c-.443-.266-.707-.752-.69-1.268l.167-5.333c.01-.248.215-.443.463-.44.247 0 .449.195.458.442l.12 3.478c.003.19.145.349.333.373.101.011.203-.02.28-.087.077-.067.123-.163.127-.265l.12-3.482c0-.253.205-.458.458-.458s.458.205.458.458l.12 3.482c.004.1.048.194.123.26s.173.099.272.092c.189-.024.331-.183.333-.373l.117-3.478c.009-.246.211-.441.457-.442.247 0 .449.195.458.442l.167 5.333c.018.515-.244 1-.685 1.267zm7.32-2.983c0-2.242-1.137-4.058-2.537-4.058s-2.537 1.817-2.537 4.058c0 1.717.667 3.167 1.613 3.758l-.685 6.435c-.048.605.248 1.185.765 1.502.517.317 1.169.317 1.686 0 .517-.317.813-.898.765-1.502l-.685-6.435c.947-.592 1.613-2.042 1.613-3.758z' fill='%23000' fill-rule='nonzero'/%3E%3C/svg%3E"
    },
  ],
  inventories: [
    {
      id: 1,
      storageSize: 180,
      name: "Sac à dos",
      description: "Arthur Shelby",
      selectName: "Arthur Shelby",
      selectedNearbyInventoryId: 26,
      nearbyInventoriesIds: [26, 27, 33],
      categoriesIds: [1, 2, 3, 4, 5],
      items: [
        {
          id: 1,
          quantity: 50,
        },
        {
          id: 8,
          quantity: 1,
          isEquipped: true
        }
      ]
    },
    {
      id: 26,
      storageSize: 2000,
      name: "4x4 Sport",
      description: "Rom Burdi",
      selectName: "Voiture Rom Burdi",
      categoriesIds: [1, 2],
      hasReadAccess: true, // Determine if can display transfer inventory
      items: [
        {
          id: 2,
          quantity: 10
        }
      ]
    }
  ]
}
```
</details>


#### updateItemsInventories 

:warning: `id` of the article is mandatory for its update.  
:information_source: It's not necessary to send all DATA for update. You can send only the field to update.

```js 
BURDIGALAX_inventory.updateItemsInventories(
    inventoryId,
    [
      {
        id: idItem,
        quantity: newQuantity
      }
    ]
);
```

#### updateInventories 

:warning: `id` of the inventories is mandatory for its update.  
:information_source: It's not necessary to send all DATA for update. You can send only the field to update.

```js 
BURDIGALAX_inventory.updateInventories(
    [
      {
         id: 1,
         storageSize: 1500,
         selectedNearbyInventoryId: null,
         nearbyInventoriesIds: [26, 35, 44]
      }, 
      {
         id: 44,
         storageSize: 2000,
         name: "4x4 Sport",
         description: "Rom Burdi",
         selectName: "Voiture Rom Burdi",
         categoriesIds: [
            1,
            2
         ],
         hasReadAccess: true,
         items: [
            {
               id: 2,
               quantity: 10
            }
         ]
      }
    ]
);
```

#### updateItems

:warning: `id` of the items is mandatory for its update.  
:information_source: It's not necessary to send all DATA for update. You can send only the field to update.
Or only new item to add on list.

```js 
BURDIGALAX_inventory.updateItems(
    [
      {
         "id": 36,
         "name": "Donut",
         "categoryId": 1,
         "description": "",
         "health": 45,
         "imageUrl": null,
         "isEquipable": false,
         "isDeletable": true,
         "isUsable": true,
         "iconUrl": "data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Ctitle%3Eico-donut@1x%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cpath d='M11.995.002c6.623 0 11.992 5.368 11.992 11.992 0 6.623-5.368 11.992-11.992 11.992-6.624 0-11.992-5.368-11.992-11.992 0-6.623 5.369-11.992 11.992-11.992zm-8.951 17.367c.755-.676 2.163-1.52 3.718-.369 1.362 1.009 1.447.862 1.547.688 1.181-2.048 2.875-1.109 4.124.225 1.929 2.062 2.732 1.821 4.176-.945 1.982-3.795 3.805-1.875 4.739-.335.695-1.398 1.086-2.973 1.086-4.639 0-5.766-4.674-10.44-10.44-10.44-5.766 0-10.44 4.674-10.44 10.44 0 1.966.544 3.805 1.489 5.375zm17.37.798c-.379-.771-1.409-2.447-2.434-.483-1.98 3.791-3.931 4.218-6.674 1.285-.385-.411-1.161-1.371-1.657-.51-.572.99-1.054 1.826-3.809-.215-.762-.565-1.526.02-1.897.396 1.915 2.317 4.811 3.794 8.052 3.794 3.456 0 6.519-1.68 8.419-4.267zm-1.025-4.179c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm-8.148-8.328c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm-5.545 4.997c-.664.77-1.836-.24-1.172-1.01l.758-.877c.663-.77 1.836.24 1.172 1.01l-.758.877zm8.568-4.488c-1.011-.105-.852-1.644.159-1.54l1.153.121c1.011.104.852 1.644-.159 1.539l-1.153-.12zm3.882 2.555c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm-13.884 5.507c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm1.609-8.489c-.641-.789.56-1.765 1.201-.976l.73.9c.641.789-.56 1.765-1.201.976l-.73-.9zm6.124 2.075c2.303 0 4.177 1.874 4.177 4.177 0 2.306-1.873 4.177-4.177 4.177-2.307 0-4.177-1.87-4.177-4.177 0-2.304 1.873-4.177 4.177-4.177zm0 1.552c-1.45 0-2.625 1.175-2.625 2.625s1.175 2.625 2.625 2.625c1.451 0 2.625-1.173 2.625-2.625 0-1.453-1.172-2.625-2.625-2.625z' fill='%23D48CD2' fill-rule='nonzero'/%3E%3C/svg%3E",
         "weight": 0.5,
         "effects": [
            {
               "id": "food",
               "value": 3
            },
            {
               "id": "hydration",
               "value": -5
            }
         ]
      }
    ]
);
```
### Contact
> Discord: RomBurdi#9770