import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { BreedService } from 'src/app/services/breed.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: false,
})
export class HomePage {
    breeds: any[] = [];
    allBreeds: any[] = [];
    searchTerm: string = '';
    error = false;      

    constructor(private router: Router, private breedService: BreedService, private loadingCtrl: LoadingController,
        private toastCtrl: ToastController) { }

    async ngOnInit() {
        this.loadBreeds();
    }

    //Carga inicial del api de gatos
    async loadBreeds() {
        this.error = false;

        const loading = await this.loadingCtrl.create({
            message: 'Loading Cats...',
            spinner: 'crescent',
        });

        await loading.present();

        try {
            this.allBreeds = await this.breedService.getBreeds();
            this.breeds = this.allBreeds;
        } catch (error) {
            console.error('Error al obtener los gatos:', error);
            this.error = true;
            this.showToast('An error ocurred, please try again.');
        } finally {
            await loading.dismiss();
        }
    }

    async showToast(message: string) {
        const toast = await this.toastCtrl.create({
          message,
          duration: 3000,
          position: 'bottom',
          color: 'danger',
        });
        toast.present();
    }

    goToDetail(item: any) {
        this.router.navigate(['/breed-detail'], { state: { breed: item } });
    }

    //Filtra los items por el search-bar
    filterBreeds() {
        const searchTerm = this.searchTerm.toLowerCase().trim();
        
        if (searchTerm.length < 2) {
            this.breeds = [...this.allBreeds];
            return;
        }

        //Filtra coincidencias y ordena por los mejores matchs
        this.breeds = this.allBreeds
                        .filter(breed => breed.name.toLowerCase().includes(searchTerm))
                        .sort((a, b) => a.name.toLowerCase().indexOf(searchTerm) - b.name.toLowerCase().indexOf(searchTerm));
    }
}
