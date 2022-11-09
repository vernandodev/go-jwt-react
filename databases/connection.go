package databases

import (
	"github.com/vernandodev/go-jwt-react/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connect() {
	dsn := "root:dev034@@tcp(127.0.0.1:3306)/go-jwt-reactjs?charset=utf8mb4&parseTime=True&loc=Local"
	connection, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err)
	}

	connection.AutoMigrate(&models.User{})

}
