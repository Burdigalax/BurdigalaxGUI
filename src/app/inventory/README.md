
# Burdigalax RP - Inventory 

## Quick installation GUI

DOWNLOAD Burdigalax Packages to install on your ONSET server. 

[![Download](../../../download.svg "Download") Download Burdigalax package GUI. v4.1.0](https://github.com//Burdigalax/BurdigalaxGUI/raw/master/ONSET_SERVER.4.1.0.zip)


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
 BURDIGALAX_inventory.updateItemsInventories(inventoryId, JSON);
 BURDIGALAX_inventory.updateInventory(JSON); // WIP
 BURDIGALAX_inventory.updateItems(JSON); // WIP ! 
  
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
    
```json
{
}
```
</details>

- List of all OTHERS parameters :

<details>
    <summary>SHOW / HIDE JSON</summary>

```json
{
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

### Contact
> Discord: RomBurdi#9770