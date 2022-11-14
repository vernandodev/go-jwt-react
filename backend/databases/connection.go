package databases

import (
	"github.com/vernandodev/go-jwt-react/backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// create global variable
var DB *gorm.DB

func Connect() {
	dsn := "root:dev034@@tcp(127.0.0.1:3306)/go-jwt-reactjs?charset=utf8mb4&parseTime=True&loc=Local"
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	DB = connection

	connection.AutoMigrate(&models.User{})

}
