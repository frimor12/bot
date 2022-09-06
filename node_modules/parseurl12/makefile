.PHONY: install uninstall test

install:
	docker-compose run --rm npm install

uninstall:
	docker-compose run --rm shell sh -c 'for file in $(shell cat ./.gitignore); do rm -rf $$file; done'
	docker-compose down --rmi local --volumes --remove-orphans

test:
	docker-compose run --rm npm test
