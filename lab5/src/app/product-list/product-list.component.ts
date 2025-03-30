import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  categoryId: number;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', imageUrl: '../../assets/13pink.jpg', categoryId: 1, likes: 1, },
    { id: 2, name: 'Product 2',imageUrl: '../../assets/13white.jpg', categoryId: 1, likes: 1, },
    { id: 3, name: 'Product 3',imageUrl: '../../assets/16black.jpeg', categoryId: 1, likes: 1, },
    { id: 4, name: 'Product 4',imageUrl: '../../assets/ipad.jpg', categoryId: 1, likes: 1, },
    { id: 5, name: 'Product 5',imageUrl: '../../assets/applewatch.jpeg', categoryId: 1, likes: 1, },

    { id: 6, name: 'Product 6', imageUrl: '../../assets/tapochki.jpg',categoryId: 2, likes: 1, },
    { id: 7, name: 'Product 7', imageUrl: '../../assets/tap1.jpg',categoryId: 2 , likes: 1,},
    { id: 8, name: 'Product 8', imageUrl: '../../assets/tap2.jpg',categoryId: 2 , likes: 1,},
    { id: 9, name: 'Product 9', imageUrl: '../../assets/tap3.jpg',categoryId: 2 , likes: 1,},
    { id: 10, name: 'Product 10', imageUrl: '../../assets/tap4.jpg',categoryId: 2, likes: 1, },

    { id: 11, name: 'Product 11', imageUrl: '../../assets/a1.jpg',categoryId: 3, likes: 1, },
    { id: 12, name: 'Product 12', imageUrl: '../../assets/a2.jpg',categoryId: 3 , likes: 1,},
    { id: 13, name: 'Product 13', imageUrl: '../../assets/a3.jpg',categoryId: 3 , likes: 1,},
    { id: 14, name: 'Product 14', imageUrl: '../../assets/a4.jpg',categoryId: 3 , likes: 1,},
    { id: 15, name: 'Product 15', imageUrl: '../../assets/a5.jpeg',categoryId: 3, likes: 1, },

    { id: 16, name: 'Product 16',imageUrl: '../../assets/q1.jpg', categoryId: 4 , likes: 1,},
    { id: 17, name: 'Product 17',imageUrl: '../../assets/q2.jpg', categoryId: 4 , likes: 1,},
    { id: 18, name: 'Product 18',imageUrl: '../../assets/q3.jpeg', categoryId: 4 , likes: 1,},
    { id: 19, name: 'Product 19',imageUrl: '../../assets/q4.jpg', categoryId: 4 , likes: 1,},
    { id: 20, name: 'Product 20',imageUrl: '../../assets/q5.jpg', categoryId: 4 , likes: 1,},
  ];

  categoryProducts: Product[] = [];

  constructor(private route: ActivatedRoute) {
    let categoryId: number = 0;
    if (this.route.snapshot.paramMap.has('id')) {
      categoryId = +this.route.snapshot.paramMap.get('id')!;
      this.categoryProducts = this.products.filter(p => p.categoryId === categoryId);
    }
  }
  deleteProduct(productId: number) {
    this.categoryProducts = this.categoryProducts.filter(product => product.id !== productId);
  }
  likeProduct(productId: number) {
    const product = this.categoryProducts.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }
}