cactus build &&
rm -f .build/static &&
rm -rf published &&
mkdir published &&
cp -rp .build/* published/ &&
cp -rp static/ published/

if [ -d /var/www/html ]; then
	#sudo rm -rf /var/www/html/www.shilad.com &&
	#sudo mkdir /var/www/html/www.shilad.com &&
	sudo cp -rp published/* /var/www/html/www.shilad.com/ &&
	sudo chmod -R 777 /var/www/html/www.shilad.com/
fi
