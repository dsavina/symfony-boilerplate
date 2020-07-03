<?php
/*
 * This file has been automatically generated by TDBM.
 * You can edit this file as it will not be overwritten.
 */

declare(strict_types=1);

namespace App\Domain\Dao;

use App\Domain\Dao\Generated\BaseProductDao;
use App\Domain\Enum\Filter\ProductsSortBy;
use App\Domain\Enum\Filter\SortOrder;
use App\Domain\Model\Product;
use App\Domain\Throwable\InvalidModel;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use TheCodingMachine\TDBM\ResultIterator;
use TheCodingMachine\TDBM\TDBMService;

/**
 * The ProductDao class will maintain the persistence of Product class into the products table.
 */
class ProductDao extends BaseProductDao
{
    private ValidatorInterface $validator;

    public function __construct(TDBMService $tdbmService, ValidatorInterface $validator)
    {
        $this->validator = $validator;
        parent::__construct($tdbmService);
    }

    /**
     * @throws InvalidModel
     */
    public function validate(Product $product): void
    {
        $violations = $this->validator->validate($product);
        InvalidModel::throwException($violations);
    }

    /**
     * @throws InvalidModel
     */
    public function save(Product $product): void
    {
        $this->validate($product);
        parent::save($product);
    }

    /**
     * @return Product[]|ResultIterator
     */
    public function search(
        ?string $search = null,
        ?float $lowerPrice = null,
        ?float $upperPrice = null,
        ?ProductsSortBy $sortBy = null,
        ?SortOrder $sortOrder = null
    ): ResultIterator {
        $sortBy    = $sortBy ?: ProductsSortBy::PRICE();
        $sortOrder = $sortOrder ?: SortOrder::ASC();

        return $this->find(
            [
                'name LIKE :search',
                'price >= :lowerPrice',
                'price <= :upperPrice',
            ],
            [
                'search' => '%' . $search . '%',
                'lowerPrice' => $lowerPrice,
                'upperPrice' => $upperPrice,
            ],
            $sortBy . ' ' . $sortOrder
        );
    }
}
