import express, { Request, Response, NextFunction } from 'express';

// Clothing Model Reference - db.clothing
import Clothing from '../Models/clothing';


// Display Functions

//(R)ead in CRUD
export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.clothing.find()
    Clothing.find(function(err, clothingCollection)
    {
        if(err)
        {
            return console.error(err);
        }
        
        res.render('index', { title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection  })
    });
}