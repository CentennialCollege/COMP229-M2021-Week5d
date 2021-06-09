import express, { Request, Response, NextFunction } from 'express';

// Clothing Model Reference - db.clothing
import Clothing from '../Models/clothing';


// Display Functions

//(R)ead in CRUD
export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.clothing.find()
    Clothing.find((err, clothingCollection) =>
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        
        res.render('index', { title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection  });
    });
}

// Display (E)dit page
export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    // pass the id to the db

    // db.clothing.find({"_id": id})

    Clothing.findById(id, {}, {}, (err, clothingItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit view
        res.render('index', { title: 'Edit', page: 'update', clothing: clothingItemToEdit  });
    });
}

// Display (C)reate page
export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
    // show the edit view
    res.render('index', { title: 'Add', page: 'update', clothing: '' });
}

// Process Functions

// Process (E)dit page
export function ProcessEditPage(req: Request, res: Response, next: NextFunction): void
{

}

// Process (C)reate page
export function ProcessAddPage(req: Request, res: Response, next: NextFunction): void
{
    
}

// Process (D)elete page
export function ProcessDeletePage(req: Request, res: Response, next: NextFunction): void
{
    
}